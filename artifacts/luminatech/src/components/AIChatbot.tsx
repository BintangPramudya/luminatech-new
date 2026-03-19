import { useState, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Loader2, MessageCircle, Trash2 } from "lucide-react";

function MarkdownMessage({ content, isUser }: { content: string; isUser: boolean }) {
  const parseLine = (line: string, key: number) => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      if (match[2] !== undefined) {
        parts.push(<strong key={match.index} className="font-semibold">{match[2]}</strong>);
      } else if (match[3] !== undefined) {
        parts.push(<em key={match.index}>{match[3]}</em>);
      } else if (match[4] !== undefined) {
        parts.push(
          <code key={match.index} className={`px-1 py-0.5 rounded text-xs font-mono ${isUser ? "bg-red-700" : "bg-gray-100"}`}>
            {match[4]}
          </code>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }
    return <Fragment key={key}>{parts}</Fragment>;
  };

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
    const bulletMatch = line.match(/^[-*•]\s+(.+)/);

    if (numberedMatch) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length) {
        const lm = lines[i].match(/^(\d+)\.\s+(.+)/);
        if (!lm) break;
        listItems.push(
          <li key={i} className="ml-1">{parseLine(lm[2], i)}</li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 my-1">
          {listItems}
        </ol>
      );
    } else if (bulletMatch) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length) {
        const bm = lines[i].match(/^[-*•]\s+(.+)/);
        if (!bm) break;
        listItems.push(
          <li key={i} className="ml-1">{parseLine(bm[1], i)}</li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-1">
          {listItems}
        </ul>
      );
    } else if (line.trim() === "") {
      if (elements.length > 0) {
        elements.push(<div key={`br-${i}`} className="h-1" />);
      }
      i++;
    } else {
      elements.push(
        <p key={i} className="leading-relaxed">
          {parseLine(line, i)}
        </p>
      );
      i++;
    }
  }

  return <div className="space-y-0.5 text-sm">{elements}</div>;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

async function createConversation(title: string): Promise<number> {
  const res = await fetch(`${BASE_URL}/api/openai/conversations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  const data = await res.json();
  return data.id;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Halo! Saya asisten AI LuminaTech 👋 Saya siap membantu Anda mengenai layanan pembuatan website, desain, SEO, dan strategi digital. Ada yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getOrCreateConversation = async (): Promise<number> => {
    if (conversationId) return conversationId;
    const id = await createConversation("LuminaTech Chat");
    setConversationId(id);
    return id;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const convId = await getOrCreateConversation();

      const response = await fetch(
        `${BASE_URL}/api/openai/conversations/${convId}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: userMessage.content }),
        }
      );

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.content) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? { ...m, content: m.content + data.content }
                      : m
                  )
                );
              }
              if (data.done) {
                setIsLoading(false);
              }
            } catch {}
          }
        }
      }
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.",
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Halo! Saya asisten AI LuminaTech 👋 Saya siap membantu Anda mengenai layanan pembuatan website, desain, SEO, dan strategi digital. Ada yang bisa saya bantu?",
      },
    ]);
    setConversationId(null);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">LuminaTech AI</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <p className="text-red-100 text-xs">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="text-red-200 hover:text-white transition-colors p-1 rounded"
                  title="Hapus chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-red-200 hover:text-white transition-colors p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === "user"
                        ? "bg-red-600"
                        : "bg-white border border-gray-200 shadow-sm"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-red-600" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-red-600 text-white rounded-tr-sm"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-sm"
                    }`}
                  >
                    {msg.content ? (
                      <MarkdownMessage content={msg.content} isUser={msg.role === "user"} />
                    ) : (
                      <span className="flex gap-1 items-center py-0.5">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                  placeholder="Tanya seputar layanan kami..."
                  disabled={isLoading}
                  className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-gray-50 disabled:opacity-60"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Powered by LuminaTech AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg shadow-red-500/30 flex items-center justify-center text-white"
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </>
  );
}
