import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getRandomUsers, type RandomUser } from "../utils/randomUsers";

interface TeamMember {
  id: number;
  data: RandomUser;
  job: string;
  description: string;
}

export default function AboutUsTeam() {
  const [teamData, setTeamData] = useState<RandomUser[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);

  // dummy data
  const team: TeamMember[] = [
    {
      id: 1,
      data: teamData[0],
      job: "Founder",
      description:
        "Also a competitive Yu-Gi-Oh!, Magic the Gathering, and One Piece TCG player.",
    },
    {
      id: 2,
      data: teamData[1],
      job: "Lead Designer",
      description:
        "Main designer for CardsTCG's various accessories. Retired Pokemon TCG player.",
    },
    {
      id: 3,
      data: teamData[2],
      job: "Lead Artist",
      description: "Creates illustrations for CardsTCG's various accessories.",
    },
    {
      id: 4,
      data: teamData[3],
      job: "Community Manager",
      description:
        "Main organizer for events such as weekly tournaments, coordinating various judges.",
    },
  ];

  const getTeamMembers = async () => {
    setIsPending(true);
    try {
      const response = await getRandomUsers(4, "large");
      if (typeof response !== "undefined") {
        setTeamData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  return (
    <div className="flex flex-col mx-12 md:mx-36 px-8 py-4 rounded-md font-pjs">
      <div className="flex justify-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wide">Meet Our Team</h1>
      </div>
      {isPending ? (
        <div className="flex justify-center my-8">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {team.map((member) => {
            return (
              <TeamCard
                key={member.id}
                name={member.data?.name}
                thumbnail={member.data?.thumbnail}
                job={member.job}
                description={member.description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
