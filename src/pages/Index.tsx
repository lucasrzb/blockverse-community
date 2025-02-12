
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import ServerCard from "@/components/ServerCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pickaxe, Gamepad2, Users } from "lucide-react";

const Index = () => {
  const featuredNews = [
    {
      title: "Nova Atualização 1.20",
      description: "Descubra todas as novidades da última atualização do Minecraft",
      date: "2024-03-20",
      imageUrl: "/placeholder.svg",
    },
    {
      title: "Evento de Primavera",
      description: "Participe do maior evento da comunidade nesta primavera",
      date: "2024-03-19",
      imageUrl: "/placeholder.svg",
    },
  ];

  const featuredServers = [
    {
      name: "Survival Brasil",
      players: 150,
      maxPlayers: 200,
      status: "online" as const,
      version: "1.20.1",
      ip: "play.survival.br",
    },
    {
      name: "MiniGames Network",
      players: 85,
      maxPlayers: 100,
      status: "online" as const,
      version: "1.20.1",
      ip: "play.minigames.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/minecraft-bg.jpg')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <Navbar />
        
        {/* Hero Section com Animações */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg animate-fadeIn">
              Bem-vindo ao MineCraft Hub
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Sua fonte definitiva para notícias, servidores e comunidade Minecraft
            </p>
            
            {/* Cards de Recursos */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 px-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                <Pickaxe className="w-12 h-12 mb-4 mx-auto text-minecraft-green" />
                <h3 className="text-xl font-bold text-white mb-2">Explore</h3>
                <p className="text-white/80">Descubra novos mundos e aventuras</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                <Gamepad2 className="w-12 h-12 mb-4 mx-auto text-minecraft-green" />
                <h3 className="text-xl font-bold text-white mb-2">Jogue</h3>
                <p className="text-white/80">Conecte-se aos melhores servidores</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                <Users className="w-12 h-12 mb-4 mx-auto text-minecraft-green" />
                <h3 className="text-xl font-bold text-white mb-2">Conecte-se</h3>
                <p className="text-white/80">Faça parte da nossa comunidade</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Button asChild className="bg-minecraft-green hover:bg-minecraft-green/90 transform hover:scale-105 transition-all">
                <Link to="/news">Ver Notícias</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transform hover:scale-105 transition-all">
                <Link to="/servers">Explorar Servidores</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 px-4 bg-white/95">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Últimas Notícias</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Servers Section */}
        <section className="py-16 px-4 bg-minecraft-green/10 backdrop-blur-md">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Servidores em Destaque</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredServers.map((server, index) => (
                <ServerCard key={index} {...server} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
