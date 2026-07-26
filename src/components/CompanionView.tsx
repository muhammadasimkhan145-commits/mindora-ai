import React, { useState, useEffect, useRef } from 'react';
import { Send, Heart, Sparkles, MessageCircle, Shield, Globe, RefreshCw } from 'lucide-react';
import { ChatMessage, Language } from '../types';

interface CompanionViewProps {
  currentLanguage: Language;
}

export const CompanionView: React.FC<CompanionViewProps> = ({ currentLanguage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Warm Welcome Message according to language
  useEffect(() => {
    let welcomeText = "Hello! I'm your Mindora Companion. I'm here to listen, offer supportive conversation, and help you talk through whatever is on your mind today. How are you feeling right now?";
    if (currentLanguage === 'Urdu') {
      welcomeText = "سلام! میں آپ کا مینڈورا ہمدرد دوست ہوں۔ میں آپ کی بات سننے اور دل کا بوجھ ہلکا کرنے کے لیے یہاں موجود ہوں۔ آج آپ کی طبیعت کیسی ہے؟";
    } else if (currentLanguage === 'Roman Urdu') {
      welcomeText = "Hello! Main aap ka Mindora Companion hoon. Main aap ki baat sunne aur dil ka bojh halka karne ke liye yahan hoon. Aaj aap kaisa feel kar rahe hain?";
    }

    setMessages([
      {
        id: 'companion-welcome-1',
        sender: 'ai',
        text: welcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  }, [currentLanguage]);

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
          mode: 'companion',
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
                    setIsLoading(false);
                    isFirstChunk = false;
                  }

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
                // Ignore SSE parse errors
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
              text: "I'm right here with you. Feel free to express whatever is on your mind.",
              timestamp: timestampStr,
            },
          ]);
        }
      } else {
        const data = await res.json();
        const aiReply = data.reply || "I'm right here for you. Tell me a bit more about what's going on.";
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
      console.error("Companion chat error:", err);
      const isTimeout = err?.name === 'AbortError';
      const fallbackText = isTimeout
        ? "⏱️ Request timed out. I hear you and I'm right here with you. Please feel free to try sending your thought again."
        : "I had a brief connection pause, but I'm right here whenever you want to try sending that again.";

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

  const companionPrompts = [
    { label: "Feeling Overwhelmed", prompt: "I'm feeling a bit overwhelmed today. Can we talk?" },
    { label: "Need Someone to Listen", prompt: "I just need a gentle sounding board to share my thoughts." },
    { label: "Positive Affirmation", prompt: "Can you share a comforting thought or affirmation for my day?" },
    { label: "Stress Release", prompt: "What are some simple ways I can calm my mind right now?" },
  ];

  return (
    <div className="flex flex-col w-full max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 pt-3 pb-32 animate-fadeIn min-h-[82vh]">
      {/* Friendly Header Card */}
      <div className="bg-gradient-to-r from-tertiary-fixed/30 via-secondary-container/30 to-primary-container/30 rounded-2xl p-4 flex items-center justify-between border border-tertiary/20 mb-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-tertiary to-secondary flex items-center justify-center text-white shadow-md">
            <Heart className="w-5 h-5 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-on-tertiary-fixed-variant">Mindora Companion</span>
            <span className="text-[11px] font-medium text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              Empathetic AI Friend ({currentLanguage})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-tertiary bg-white px-2.5 py-1 rounded-full border border-tertiary/20">
          <Shield className="w-3.5 h-3.5" />
          <span>Safe Space</span>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-2">
        {companionPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(p.prompt)}
            disabled={isLoading}
            className="flex-none px-3.5 py-1.5 rounded-full bg-white hover:bg-tertiary/10 border border-tertiary/20 text-xs font-semibold text-tertiary transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-tertiary" />
            <span>{p.label}</span>
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
                    ? 'bg-tertiary text-white rounded-tr-xs shadow-md shadow-tertiary/20 font-medium'
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
              <div className="w-2 h-2 rounded-full bg-tertiary animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-tertiary animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-tertiary animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-on-surface-variant font-medium ml-1">Mindora is typing...</span>
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
            placeholder={`Share your thoughts in ${currentLanguage}...`}
            disabled={isLoading}
            className="flex-1 bg-surface-container-low border-none rounded-xl px-4 py-3 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-tertiary/20"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="w-11 h-11 rounded-xl bg-tertiary hover:bg-tertiary/90 text-white flex items-center justify-center shadow-md shadow-tertiary/20 active:scale-95 transition-transform disabled:opacity-40 disabled:scale-100 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
