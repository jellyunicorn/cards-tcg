interface TeamProps {
  name: string;
  thumbnail: string;
  job: string;
  description: string;
}

export default function TeamCard(props: TeamProps) {
  return (
    <div className="flex p-4 rounded-xl gap-4 shadow-xl bg-white items-center">
      <img
        src={props.thumbnail}
        alt="Team member thumbnail"
        className="rounded-full object-scale-down h-[70%] w-auto md:h-full"
        loading="lazy"
      />
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <h2 className="text-gray-500 text-[12px]">{props.job}</h2>
        <hr className="my-1" />
        <p className="text-[12px]">{props.description}</p>
      </div>
    </div>
  );
}
