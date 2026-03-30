import type { RandomUser } from "../utils/randomUsers";

interface TestimonialCardProps {
  client: RandomUser;
  review: string;
}

export default function HomeTestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="shadow-xl rounded-xl p-5">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            src={props.client?.thumbnail}
            alt="Client thumbnail"
            className="rounded-full"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center mt-2 pb-1 border-b border-gray-400">
          <p className="text-xl font-semibold tracking-wide">{props.client?.name}</p>
        </div>
        <p className="mt-1 italic text-[14px]">{props.review}</p>
      </div>
    </div>
  );
}
