import { useEffect, useState } from "react";
import HomeTestimonialCard from "../components/HomeTestimonialCard";
import { getRandomUsers, type RandomUser } from "../utils/randomUsers";
import LoadingSpinner from "../components/LoadingSpinner";

interface Testimonial {
  id: number;
  clientData: RandomUser;
  review: string;
}

export default function HomeBlogs() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [clientData, setClientData] = useState<RandomUser[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      clientData: clientData[0],
      review:
        "When I went to a regional organized by CardsTCG, the rounds went incredibly quick and smooth. There was a player that stank who was immediately escorted out of the venue. One of the best regional experiences I've ever had for sure.",
    },
    {
      id: 2,
      clientData: clientData[1],
      review:
        "Some of the most comprehensive collections of cards I've seen from a vendor. From the most sought-after chase cards to that decade-old common everyone's buying out, CardsTCG's got your back, and they deliver quickly, too.",
    },
    {
      id: 3,
      clientData: clientData[2],
      review: "I had a problem with delivery and the CardsTCG staff was incredibly helpful and kind. They offered to re-send the product free of charge!",
    },
    {
      id: 4,
      clientData: clientData[3],
      review: "Accessories are very high-quality. Dice have great weight to them, deckboxes and playmats last practically forever, and all of them are hand-drawn in-house by highly talented artists.",
    },
  ];

  const getClients = async () => {
    setIsPending(true);
    try {
      const response = await getRandomUsers(4, "large");
      if (typeof response !== "undefined") {
        setClientData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="font-pjs">
      <div className="mt-8 flex items-center justify-center mx-12 gap-4">
        <h1 className="text-5xl font-extrabold lg:tracking-wide">
          Testimonials
        </h1>
      </div>
      {isPending ? (
        <div className="flex justify-center my-8">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 my-8 mx-6 lg:mx-12 gap-2 lg:gap-3">
          {testimonials.map((testimonial) => {
            return (
              <HomeTestimonialCard
                key={testimonial.id}
                client={testimonial.clientData}
                review={testimonial.review}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
