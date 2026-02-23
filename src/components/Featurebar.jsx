import thumbs from "../assets/thumbs.png";
import plain from "../assets/plain.png";
import medal from "../assets/medal.png";
import refresh from "../assets/refresh.png";
const Featurebar = () => {
  return (
    <div className="py-2 border-t border-b border-white">
      <ul className="flex justify-center items-center space-x-12 text-white text-sm">
        <li className="flex items-center space-x-2">
          <img className="h-6 w-6" src={thumbs} alt="#1 Rated" />
          <span>#1 Rated Solution</span>
        </li>
        <li className="flex items-center space-x-2">
          <img className="h-6 w-6" src={plain} alt="Free Shipping" />
          <span>Free Worldwide Shipping</span>
        </li>
        <li className="flex items-center space-x-2">
          <img className="h-6 w-6" src={medal} alt="Ship Fast" />
          <span>Ship within 24 hours of purchase</span>
        </li>
        <li className="flex items-center space-x-2">
          <img className="h-6 w-6" src={refresh} alt="Hassle Free" />
          <span>30 days hassle free return</span>
        </li>
      </ul>
    </div>
  );
};

export default Featurebar;
