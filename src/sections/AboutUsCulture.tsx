import CultureCard from "../components/CultureCard";
import iconHeart from "../assets/culture-heart.svg";
import iconCommunity from "../assets/culture-community.svg";
import iconKnowledge from "../assets/culture-knowledge.svg";
import iconMotivate from "../assets/culture-motivate.svg";
import iconRocket from "../assets/culture-rocket.svg";

interface CultureItem {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export default function AboutUsCulture() {
  const companyCulture: CultureItem[] = [
    {
      id: 1,
      icon: iconHeart,
      name: "Inspired by Passion",
      description:
        "We love what we do, and that excitement is the source of our innovation.",
    },
    {
      id: 2,
      icon: iconCommunity,
      name: "Community for All",
      description:
        "We embrace diversity, respecting the thoughts and beliefs of others and listening with open hearts.",
    },
    {
      id: 3,
      icon: iconKnowledge,
      name: "A Quest for Knowledge",
      description: "We constantly seek out information in order to grow.",
    },
    {
      id: 4,
      icon: iconRocket,
      name: "Go Beyond",
      description:
        "We push ourselves always striving to do better than ever before.",
    },
    {
      id: 5,
      icon: iconMotivate,
      name: "Motivate Your Peers",
      description:
        "We lift others up to ensure our team is the strongest it can possibly be.",
    },
  ];

  return (
    <div className="bg-[#d1eaff] font-pjs py-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Our Core Values
        </h1>
        <p className="text-xl tracking-wide text-center">
          Our team prides itself in excellence and passion for hobby culture.
        </p>
      </div>
      <div className="flex flex-row flex-wrap mt-6 mx-18 justify-center items-start gap-12">
        {companyCulture.map((item) => {
          return (
            <CultureCard
              key={item.id}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
