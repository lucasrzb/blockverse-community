
import Navbar from "@/components/Navbar";
import ServerCard from "@/components/ServerCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Servers = () => {
  const servers = [
    {
      name: "Hypixel",
      players: 150000,
      maxPlayers: 200000,
      status: "online" as const,
      version: "1.8.9 - 1.20.1",
      ip: "mc.hypixel.net",
    },
    {
      name: "CubeCraft",
      players: 25000,
      maxPlayers: 50000,
      status: "online" as const,
      version: "1.16.5 - 1.20.1",
      ip: "play.cubecraft.net",
    },
    {
      name: "Mineplex",
      players: 15000,
      maxPlayers: 30000,
      status: "online" as const,
      version: "1.8 - 1.20.1",
      ip: "us.mineplex.com",
    },
    {
      name: "Complex Gaming",
      players: 8500,
      maxPlayers: 10000,
      status: "online" as const,
      version: "1.19 - 1.20.1",
      ip: "play.complexgaming.com",
    },
    {
      name: "Wynncraft",
      players: 2800,
      maxPlayers: 5000,
      status: "online" as const,
      version: "1.20.1",
      ip: "play.wynncraft.com",
    },
    {
      name: "ManaCube",
      players: 3500,
      maxPlayers: 5000,
      status: "online" as const,
      version: "1.16.5 - 1.20.1",
      ip: "play.manacube.com",
    }
  ];

  const categories = [
    "Todos", "Survival", "PvP", "Minigames", "RPG", "Skyblock", "Factions"
  ];

  return (
    <div className="min-h-screen bg-[url('/minecraft-bg.jpg')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl font-bold text-white mb-4">
              Melhores Servidores de Minecraft
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Explore os servidores mais populares da comunidade Minecraft
            </p>
          </div>

          {/* Filtros e Busca */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar servidores..."
                className="pl-10 bg-white/10 text-white placeholder:text-gray-400 border-white/20"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer bg-white/10 hover:bg-white/20 text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Lista de Servidores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServerCard {...server} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;
