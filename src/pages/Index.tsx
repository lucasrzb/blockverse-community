
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import ServerCard from "@/components/ServerCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-minecraft-green">
            Bem-vindo ao MineCraft Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sua fonte definitiva para notícias, servidores e comunidade Minecraft
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-minecraft-green hover:bg-minecraft-green/90">
              <Link to="/news">Ver Notícias</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/servers">Explorar Servidores</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-white">
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
      <section className="py-16 px-4">
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
  );
};

export default Index;
