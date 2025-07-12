import { Calendar } from "lucide-react";

interface StartEndDatesProps {
    title: string;
    description: string;
}

const StartEndDates = ({ title, description }: StartEndDatesProps) => {
    return (
        <div className="flex items-center gap-4">
            <Calendar className="text-gray-400" />
            <div>
                <p>{title}</p>
                <p className="font-bold text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default StartEndDates;
