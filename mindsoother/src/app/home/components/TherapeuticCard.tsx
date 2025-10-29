interface TherapeuticApproachesInterface {
  heading: string;
  color: string;
  subHeading: string;
  description: string;
}

const allColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-900",
  purple: "bg-purple-100 text-purple-900",
  green: "bg-green-100 text-green-900",
  yellow: "bg-yellow-100 text-yellow-900",
  orange: "bg-orange-100 text-orange-900",
};

export default function TherapeuticCard({
  heading,
  color,
  subHeading,
  description,
}: TherapeuticApproachesInterface) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-xl">
      <div className={`${allColors[color] ?? ""} p-3 rounded-t-lg`}>
        <h3 className="font-bold">{heading}</h3>
      </div>
      <div className="px-5 py-8">
        <h4 className="text-xl font-bold pb-2.5">{subHeading}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
