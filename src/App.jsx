import { Star, Check, Lock } from "lucide-react"
import logo from "./assets/ExlixirVieFinal-031.png"
import navbar from "./assets/1.png"
import thumbs from "./assets/thumbs.png"
import plain from "./assets/plain.png"
import medal from "./assets/medal.png"
import refresh from "./assets/refresh.png"
import comment from "./assets/comment.jpg"
import cream from "./assets/cream.png"
import dermatology from "./assets/dermatology.png"
import madeinUSA from "./assets/madeinUSA.png"
import GPM from "./assets/GPM.png"
const App = () => {
  return (
    <div className="w-full min-h-screen">
      <section>
        <span className="flex items-center justify-center bg-black py-2">
          <p className="text-white text-md font-bold">ATTENTION:</p>
          <p className="ml-2 text-white">
            Due to increased demand for our product we cannot guarantee supply.
          </p>
        </span>
        <div className="w-full bg-pink-900">
          {/* main container */}
          {/* Top Navbar */}
          <div className="flex items-center px-8 py-4">
            <div className="flex-1">
              <img className="h-12 w-auto" src={logo} alt="logo" />
            </div>
            <div className="flex-1 flex justify-center">
              <ul className="flex items-center space-x-8 text-white text-lg leading-none">
                <li>Benefits</li>
                <li>Features</li>
                <li>About</li>
                <li>Science</li>
                <li>Reviews</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-end">
              <img className="h-12 w-auto" src={navbar} alt="navbar" />
            </div>
          </div>
          {/* Feature Bar */}
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
          {/* Additional Sections */}
          <div className="flex flex-col md:flex-row gap-8 py-20 text-white">
            <div className="relative flex gap-10 items-start">
              {/* Left Column */}
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
                  Seventy five percent of our skin is comprised of water and
                  collagen.
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
                  <img
                    className="h-20 rounded-full"
                    src={comment}
                    alt="customer"
                  />
                  <p className="text-xs">
                    “Lorem ipsum dolor sit amet, consectetur adipiscin gelit.
                    <br /> Nullam vulputate sapien sit amet velit elem entum
                    pharetr.”
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

              {/* Right Column */}
              <div className="flex-1 left-40 bg-white p-6 rounded-lg ml-30 text-black relative z-10">
                <div
                  className="absolute -top-3 -left-3 flex items-center justify-center rounded-full text-white font-bold shadow-lg -rotate-15 text-base"
                  style={{
                    backgroundColor: "#F6AF45",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  LIMITED
                  <br />
                  Supply!
                </div>

                <div className="bg-pink-900 p-4 rounded-md mb-4 text-center">
                  <h2 className="text-lg font-bold text-white mb-1">
                    Tell Us Where To Send
                  </h2>
                  <p className="text-sm font-semibold text-white">
                    YOUR BOTTLE!
                  </p>
                </div>

                <form className="space-y-3 text-sm">
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                  />

                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="City"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <select className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm">
                      <option value="Country">Country</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm"
                    />
                  </div>
                  <button
                    className="w-full h-full text-black text-2xl py-2 rounded-full font-bold"
                    style={{
                      backgroundColor: "#F6AF45",
                    }}
                  >
                    RUSH MY ORDER!
                  </button>
                  <span className="flex items-center justify-center gap-2 text-xs">
                    <Lock className="w-4 h-4" />
                    Secure 256 bit encrypted connection
                  </span>
                </form>
              </div>
              <img
                src={cream}
                alt="Product"
                className="absolute left-235 top-1/2 -translate-x-1/2 -translate-y-1/2 w-135 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
