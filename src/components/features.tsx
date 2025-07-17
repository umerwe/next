import { Check } from "lucide-react";

interface FeaturesProps {
  freeCancellation?: boolean;
  noPrepayment?: boolean;
  layout?: "list" | "inline";
}

const Features = ({ freeCancellation, noPrepayment, layout = "list" }: FeaturesProps) => {
  if (!freeCancellation && !noPrepayment) return null;

  const features = [
    freeCancellation && { labelList: "Free cancellation", labelInline: "Fully refundable" },
    noPrepayment && { labelList: "No prepayment needed – pay at the property", labelInline: "Reserve now, pay later" },
  ].filter(Boolean) as { labelList: string; labelInline: string }[];

  if (layout === "list") {
  return (
    <ul className="space-y-1 mb-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-1 text-[#0E8800]">
          <Check className="h-4 w-4 shrink-0 mt-1" />
          <span className="text-sm leading-5">{feature.labelList}</span>
        </li>
      ))}
    </ul>
  );
}


  return (
    <span className="flex gap-2">
      {features.map((feature, index) => (
        <span key={index} className="flex items-center gap-1 text-[#0E8800]">
          <Check className="h-4 w-4 " />
          <span>{feature.labelInline}</span>
        </span>
      ))}
    </span>
  );
};

export default Features;