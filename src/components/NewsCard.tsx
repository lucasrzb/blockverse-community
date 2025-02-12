
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const NewsCard = ({ title, description, date, imageUrl }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2 text-minecraft-green">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default NewsCard;
