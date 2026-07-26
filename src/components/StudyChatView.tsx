import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw, Globe, MessageSquare } from 'lucide-react';
import { ChatMessage, Language } from '../types';

interface StudyChatViewProps {
  currentLanguage: Language;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

export const StudyChatView: React.FC<StudyChatViewProps> = ({
  currentLanguage,
  initialPrompt,
  onClearInitialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Welcome Message according to selected language
  useEffect(() => {
    let welcomeText = "Hello! I'm your Mindora Study Buddy. I can help you understand psychology concepts, disorders, theories, and therapies in simple words. What would you like to learn today?";
    if (currentLanguage === 'Urdu') {
      welcomeText = "سلام! میں آپ کا مینڈورا اسسٹنٹ ہوں۔ میں نفسیاتی تصورات، بیماریاں اور تھراپی کو آسان زبان میں سمجھانے میں آپ کی مدد کر سکتا ہوں۔ آج آپ کیا سیکھنا چاہتے ہیں؟";
    } else if (currentLanguage === 'Roman Urdu') {
      welcomeText = "Hello! Main aap ka Mindora Study Buddy hoon. Main aap ko psychology concepts, disorders aur theories aasan alfaz mein samjha sakta hoon. Aaj aap kya seekhna chahte hain?";
    }

    setMessages([
      {
        id: 'welcome-1',
        sender: 'ai',
        text: welcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  }, [currentLanguage]);

  // Handle prefilled initial prompt from Explore or Assessment
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) {
        onClearInitialPrompt();
      }
    }
  }, [initialPrompt]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const aiMsgId = `ai-${Date.now()}`;
    const timestampStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream, application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          message: text,
          language: currentLanguage,
          history,
          mode: 'study',
          stream: true,
        }),
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson?.details || `HTTP error ${res.status}`);
      }

      const contentType = res.headers.get('content-type') || '';

      if (contentType.includes('text/event-stream') && res.body) {
        // Stream reading
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = '';
        let isFirstChunk = true;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('data: ')) {
              const dataStr = trimmed.slice(6);
              if (dataStr === '[DONE]') break;

              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.text) {
                  accumulatedText += parsed.text;

                  if (isFirstChunk) {
                    setIsLoading(false); // Stop typing dots as soon as stream starts
                    isFirstChunk = false;
                  }

                  // Update AI message live
                  setMessages((prev) => {
                    const existingIdx = prev.findIndex((m) => m.id === aiMsgId);
                    if (existingIdx !== -1) {
                      const updated = [...prev];
                      updated[existingIdx] = {
                        ...updated[existingIdx],
                        text: accumulatedText,
                      };
                      return updated;
                    } else {
                      return [
                        ...prev,
                        {
                          id: aiMsgId,
                          sender: 'ai',
                          text: accumulatedText,
                          timestamp: timestampStr,
                        },
                      ];
                    }
                  });
                }
              } catch (e) {
                // Ignore SSE line parse errors
              }
            }
          }
        }

        if (!accumulatedText) {
          setMessages((prev) => [
            ...prev,
            {
              id: aiMsgId,
              sender: 'ai',
              text: "I'm here to help you study psychology. What specific topic would you like to discuss?",
              timestamp: timestampStr,
            },
          ]);
        }
      } else {
        // Fallback standard JSON
        const data = await res.json();
        const aiReply = data.reply || "I'm here to help you study psychology. Could you please rephrase your question?";
        setMessages((prev) => [
          ...prev,
          {
            id: aiMsgId,
            sender: 'ai',
            text: aiReply,
            timestamp: timestampStr,
          },
        ]);
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      const isTimeout = err?.name === 'AbortError';
      const fallbackText = isTimeout
        ? "⏱️ Request timed out. Here is a quick educational overview: Psychology is the study of mind and behavior. Feel free to try asking again."
        : "I experienced a brief connection issue. Please feel free to ask your question again or explore our topic library!";

      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'ai',
          text: fallbackText,
          timestamp: timestampStr,
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickSuggestions = [
    { label: "What is OCD?", prompt: "What is OCD? Explain in simple words with daily life examples." },
    { label: "Anxiety Basics", prompt: "Explain anxiety and how it affects the mind and body." },
    { label: "Classical Conditioning", prompt: "Explain Pavlov's classical conditioning in easy words." },
    { label: "Stress & Sleep", prompt: "How does psychological stress affect sleep quality?" },
    { label: "What is CBT?", prompt: "Explain Cognitive Behavioral Therapy (CBT) and how it helps." },
  ];

  return (
    <div className="flex flex-col w-full max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 pt-3 pb-32 animate-fadeIn min-h-[82vh]">
      {/* Header Info Banner */}
      <div className="bg-primary-container/20 rounded-2xl p-4 flex items-center justify-between border border-primary/20 mb-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-primary">Mindora Study Buddy</span>
            <span className="text-[11px] font-medium text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI Psychology Tutor ({currentLanguage})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-primary bg-white px-2.5 py-1 rounded-full border border-primary/20">
          <Globe className="w-3.5 h-3.5" />
          <span>{currentLanguage}</span>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-2">
        {quickSuggestions.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(s.prompt)}
            disabled={isLoading}
            className="flex-none px-3.5 py-1.5 rounded-full bg-white hover:bg-primary/10 border border-primary/15 text-xs font-semibold text-primary transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3 h-3" />
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Messages Stream */}
      <div className="flex flex-col gap-4 flex-1">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col gap-1 max-w-[88%] ${
                isUser ? 'self-end items-end' : 'self-start items-start'
              }`}
            >
              <div
                className={`p-4 rounded-3xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  isUser
                    ? 'bg-primary text-white rounded-tr-xs shadow-md shadow-primary/20 font-medium'
                    : msg.isError
                    ? 'bg-error-container text-on-error-container rounded-tl-xs border border-error/20'
                    : 'bg-white text-on-surface rounded-tl-xs shadow-xs border border-surface-container-high'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-on-surface-variant/70 px-1">
                {msg.timestamp}
              </span>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isLoading && (
          <div className="flex flex-col gap-1 max-w-[85%] self-start items-start animate-pulse">
            <div className="p-4 rounded-3xl rounded-tl-xs bg-white border border-surface-container-high shadow-xs flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-on-surface-variant font-medium ml-1">Mindora AI is thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Bottom Input Bar */}
      <div className="fixed bottom-20 inset-x-0 z-30 max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl p-2 shadow-xl flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask psychology question in ${currentLanguage}...`}
            disabled={isLoading}
            className="flex-1 bg-surface-container-low border-none rounded-xl px-4 py-3 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="w-11 h-11 rounded-xl bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-md shadow-primary/20 active:scale-95 transition-transform disabled:opacity-40 disabled:scale-100 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
