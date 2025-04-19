
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! How can I help you with your automations today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'll help you with that! Let me suggest a workflow or connect you with our dev team for more complex requests.",
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all",
          "bg-gradient-to-r from-tech-purple to-autoverse-600 text-white hover:shadow-xl"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-0 right-6 z-50 w-96 rounded-t-xl shadow-xl bg-white overflow-hidden transition-all duration-300 transform border border-gray-200",
          isOpen ? "h-[500px]" : "h-0"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-tech-purple to-autoverse-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Autoverse Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="h-[380px] overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[80%] rounded-xl p-3",
                message.isBot 
                  ? "bg-gray-100 self-start rounded-bl-none" 
                  : "bg-autoverse-100 self-end rounded-br-none"
              )}
            >
              <p className={message.isBot ? "text-gray-800" : "text-autoverse-800"}>
                {message.text}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <div className="border-t border-gray-200 p-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about automations..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-autoverse-200 focus:border-autoverse-400"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-autoverse-600 hover:bg-autoverse-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
