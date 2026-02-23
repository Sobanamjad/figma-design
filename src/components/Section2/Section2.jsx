import Group from "../../assets/Group.png";
import skincare from "../../assets/skincare 1.png";
import skin from "../../assets/skin 1.png";
import Rectangle from "../../assets/Rectangle 24.png";
import Rectangle25 from "../../assets/Rectangle 25.png";
import Rectangle26 from "../../assets/Rectangle 26.png";
import Result4 from "../../assets/4result.png";

const Section2 = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-950 text-4xl font-bold pt-10 pb-2">
          Emotive Heading For 3 Steps
        </h1>
        <p className="text-black text-m font-light">
          <span className="block">
            Our skin is exposed to harsh UVA and UVB radiation resulting
          </span>
          <span className="block mt-1 mx-auto max-w-xs">
            in age spots, fine lines, and wrinkles.
          </span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative bg-gray-100 rounded-2xl p-6 pt-16 text-left">
          <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-tl from-pink-600 to-pink-950 flex items-center justify-center">
            <img src={Group} alt="Group" className="w-8 h-8" />
          </div>
          <span className="absolute -top-36 right-6 text-[12rem] text-gray-200 font-bold">
            1
          </span>
          <h3 className="text-lg font-semibold mb-2">Vitalize</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nullam
            vulputate sapien sit amet velit elemen tum pharetra.
          </p>
        </div>
        <div className="relative bg-gray-100 rounded-2xl p-6 pt-16">
          <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-tl from-pink-600 to-pink-950 flex items-center justify-center">
            <img src={skincare} alt="skincare" className="w-8 h-8" />
          </div>
          <span className="absolute -top-36 right-6 text-[12rem] text-gray-200 font-bold">
            2
          </span>
          <h3 className="text-lg font-semibold mb-2">Replenish</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nullam
            vulputate sapien sit amet velit elemen tum pharetra.
          </p>
        </div>
        <div className="relative bg-gray-100 rounded-2xl p-6 pt-16">
          <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-tl from-pink-600 to-pink-950 flex items-center justify-center">
            <img src={skin} alt="skin" className="w-8 h-8" />
          </div>
          <span className="absolute -top-36 right-6 text-[12rem] text-gray-200 font-bold">
            3
          </span>
          <h3 className="text-lg font-semibold mb-2">Moisturize</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Nullam
            vulputate sapien sit amet velit elemen tum pharetra.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="relative">
          <img src={Rectangle} alt="Rectangle" className="w-full rounded-lg" />
          <button
            className="absolute px-6 py-2 text-white bg-gray-600 rounded-full text-sm"
            style={{ top: "80%", left: "10%" }}
          >
            Before
          </button>
          <button
            className="absolute px-8 py-2 bg-pink-600 rounded-full text-white text-sm"
            style={{ top: "80%", left: "60%" }}
          >
            After
          </button>
        </div>
        <div className="relative">
          <img
            src={Rectangle25}
            alt="Rectangle25"
            className="w-full rounded-lg"
          />
          <button
            className="absolute px-6 py-2 text-white bg-gray-600 rounded-full text-sm"
            style={{ top: "80%", left: "10%" }}
          >
            Before
          </button>
          <button
            className="absolute px-8 py-2 bg-pink-600 rounded-full text-white text-sm"
            style={{ top: "80%", left: "60%" }}
          >
            After
          </button>
        </div>
        <div className="relative">
          <img
            src={Rectangle26}
            alt="Rectangle26"
            className="w-full rounded-lg"
          />
          <button
            className="absolute px-6 py-2 text-white bg-gray-600 rounded-full text-sm"
            style={{ top: "80%", left: "10%" }}
          >
            Before
          </button>
          <button
            className="absolute px-8 py-2 bg-pink-600 rounded-full text-white text-sm"
            style={{ top: "80%", left: "60%" }}
          >
            After
          </button>
        </div>
        <div className="relative">
          <img src={Result4} alt="Result4" className="w-full rounded-lg" />
          <button
            className="absolute px-6 py-2 text-white bg-gray-600 rounded-full text-sm"
            style={{ top: "80%", left: "10%" }}
          >
            Before
          </button>
          <button
            className="absolute px-8 py-2 bg-pink-600 rounded-full text-white text-sm"
            style={{ top: "80%", left: "60%" }}
          >
            After
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
