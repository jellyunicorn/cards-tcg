interface CultureProps {
  icon: string;
  name: string;
  description: string;
}

export default function CultureCard(props: CultureProps) {
  return (
    <div className="flex flex-col justify-center items-center w-80 gap-2">
      <img src={props.icon} alt="Company culture icon" loading="lazy" />
      <p className="text-center font-semibold text-2xl tracking-wide">
        {props.name}
      </p>
      <p className="text-center">{props.description}</p>
    </div>
  );
}
