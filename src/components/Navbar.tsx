
import { Server, Newspaper, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-minecraft-green hover:text-minecraft-green/80 transition-colors">
            MineCraft Hub
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/news" className="flex items-center space-x-2 hover:text-minecraft-green transition-colors">
              <Newspaper size={20} />
              <span>Notícias</span>
            </Link>
            <Link to="/servers" className="flex items-center space-x-2 hover:text-minecraft-green transition-colors">
              <Server size={20} />
              <span>Servidores</span>
            </Link>
            <Link to="/forum" className="flex items-center space-x-2 hover:text-minecraft-green transition-colors">
              <MessageSquare size={20} />
              <span>Fórum</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
