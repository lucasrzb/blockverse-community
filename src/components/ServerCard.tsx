
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServerCardProps {
  name: string;
  players: number;
  maxPlayers: number;
  status: "online" | "offline";
  version: string;
  ip: string;
}

const ServerCard = ({ name, players, maxPlayers, status, version, ip }: ServerCardProps) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <Badge variant={status === "online" ? "default" : "destructive"}>
          {status === "online" ? "Online" : "Offline"}
        </Badge>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-gray-600">
          Jogadores: {players}/{maxPlayers}
        </p>
        <p className="text-gray-600">Versão: {version}</p>
        <p className="font-mono bg-gray-100 p-2 rounded mt-2 select-all">
          {ip}
        </p>
      </div>
    </Card>
  );
};

export default ServerCard;
