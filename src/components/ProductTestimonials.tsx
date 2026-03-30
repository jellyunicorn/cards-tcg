import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { FaStar } from "react-icons/fa";
import { getRandomUsers, type RandomUser } from "../utils/randomUsers";

interface TestimonialProps {
  testimonial: string;
}

export default function ProductTestimonials(props: TestimonialProps) {
  const [client, setClient] = useState<RandomUser>();
  const [isPending, setIsPending] = useState<boolean>(false);

  const getClient = async () => {
    setIsPending(true);
    try {
      const response = await getRandomUsers(1, "medium");
      if (typeof response !== "undefined") {
        const client = response[0];
        setClient(client);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div>
      {isPending ? (
        <div className="flex justify-center-safe">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex p-2 gap-2 text-[12px] border-y border-black">
          <img
            src={client?.thumbnail}
            alt="Client's thumbnail"
            className="rounded-full"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p>{client?.name}</p>
            <div className="flex gap-0.5">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="mt-1">{props.testimonial}</p>
          </div>
        </div>
      )}
    </div>
  );
}
