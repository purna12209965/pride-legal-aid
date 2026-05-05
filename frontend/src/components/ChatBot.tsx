import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/chat')}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-2"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">Get Legal Help Now</span>
    </button>
  );
};

export default ChatBot;
