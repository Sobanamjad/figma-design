import cream from "../../assets/cream.png";
import LeftColumn from "./AdditionalSectionColumn/LeftColumn";
import RightColumn from "./AdditionalSectionColumn/RightColumn";

const AdditionalSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-20 text-white">
      <div className="relative flex gap-10 items-start">
        <LeftColumn />
        <RightColumn />
        
        <img
          src={cream}
          alt="Product"
          className="absolute left-235 top-1/2 -translate-x-1/2 -translate-y-1/2 w-135 rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdditionalSection;
