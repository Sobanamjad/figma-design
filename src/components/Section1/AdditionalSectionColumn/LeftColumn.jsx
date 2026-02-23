import { Star, Check } from "lucide-react";
import dermatology from "../../../assets/dermatology.png";
import madeinUSA from "../../../assets/madeinUSA.png";
import GPM from "../../../assets/GPM.png";
import comment from "../../../assets/comment.jpg";

const LeftColumn = () => {
  return (
    <div className="flex-1 space-y-6 ml-30">
          <div className="flex items-center space-x-1">
            <Star size={16} color="#c09316" strokeWidth={1.5} />
            <Star size={16} color="#c09316" strokeWidth={1.5} />
            <Star size={16} color="#c09316" strokeWidth={1.5} />
            <span className="ml-3">
              Rated 4.5/5 Based on XXX+ Happy Customers
            </span>
          </div>
          <h1 className="text-5xl font-bold">
            Achieve Visibly <br /> Younger Looking Skin
          </h1>
          <p>
            Seventy five percent of our skin is comprised of water and collagen.
          </p>
          <ol className="space-y-4">
            <li className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>Brighten Skin’s Appearance</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>Restore Your Radiant, Firmer Skin</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>Smooth Look Of Stubborn Fine Lines</span>
            </li>
          </ol>

          <div className="flex items-start space-x-3 mt-6">
            <img className="h-20 rounded-full" src={comment} alt="customer" />
            <p className="text-xs">
              “Lorem ipsum dolor sit amet, consectetur adipiscin gelit.
              <br /> Nullam vulputate sapien sit amet velit elem entum pharetr.”
              <br />
              <span>- Jane Smit</span> <span>verified customer</span>
            </p>
          </div>
          <div className="flex">
            <img src={dermatology} alt="dermatology" />
            <img src={madeinUSA} alt="madeinUSA" />
            <img src={GPM} alt="GPM" />
          </div>
        </div>
  )
}

export default LeftColumn
