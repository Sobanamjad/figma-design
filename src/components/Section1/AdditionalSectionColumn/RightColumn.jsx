import { Lock } from "lucide-react";

const RightColumn = () => {
  return (
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
            <p className="text-sm font-semibold text-white">YOUR BOTTLE!</p>
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
  )
}

export default RightColumn
