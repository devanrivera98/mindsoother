interface TherapeuticApproachesInterface {
    heading: string;
    color: string;
    subHeading: string;
    description: string;
}

const allColors: Record<string, string> = {
    blue: 'bg-blue-500 text-blue-900',
    purple: 'bg-purple-500 text-purple-900',
    green: 'bg-green-500 text-green-900',
    yellow: 'bg-yellow-500 text-yellow-900',
    orange: 'bg-orange-500 text-orange-900'
}

export default function TherapeuticCard({heading, color, subHeading, description } : TherapeuticApproachesInterface) {

    return (
        <div className="rounded-lg shadow-md hover:shadow-xl">
            <div className={`${allColors[color] ?? ""} p-3 rounded-t-lg`}>
                <h2 className="font-bold">{heading}</h2>
            </div>
            <div className="px-5 py-8">
                <h3 className="text-xl font-bold pb-2.5">{subHeading}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}