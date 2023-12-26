import forexImage from "./assets/forex.jpg"
function App() {
  return (
    <div className=" h-screen flex  justify-center items-center bg-[#1b1a1a]">
      <div className="bg-[#4E433B] rounded-xl p-2 mx-6">
        <div className=" flex flex-col md:flex-row  rounded-xl ">
          <img
            src={forexImage}
            alt="forex"
            className=" object-fit rounded-xl h-80 md:h-64 
            md:rounded-l-xl md:rounded-r-none hover:scale-105 transform duration-200 ease-in-out hover:rounded-xl"
          />
          <div className=" p-6 md:p-12">
            <h2 className="text-xl text-white font-medium font-serif text-center md:text-left">
              Get Forex Information in web
            </h2>
            <p className="text-white max-w-xs leading-5 tracking-wide text-center md:text-left my-4">
              Get Foreign Exchange and Crypto Information Daily
            </p>
            <div className=" flex flex-col mt-5 space-y-4 md:space-x-3 md:space-y-0 md:flex-row">
              <input
                type="email"
                placeholder="Enter email adress"
                className=" text-center text-white md:text-left p-2 px-4 border border-[#382d26] bg-[#242525]
                 placeholder:text-xs placeholder:text-center  md:placeholder:text-left focus:outline-none"
              />
              <button className="bg-[#f3a166] text-white px-5 py-3 text-xs rounded-md hover:bg-[rgba(114,88,58,0.76)] duration-300 ">
                Subscribe
              </button>
            </div>
          </div>
          {/* <div className="flex flex-col items-center mt-2 p-2 text-center">
            <h1 className="text-xl text-white font-bold mb-2 ">
              Get Forex Information
            </h1>
            <p className="text-white text-sm my-2">
              Get Foreign Exchange and Crypto infoemation
            </p>
            <input
              type="email"
              placeholder="Enter email adress"
              className=" w-full p-2 rounded-md mx-4 my3"
            />
            <button className="bg-[#FCA310] text-white  w-full p-2 rounded-md mx-4 my-3 ">
              Get Started
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
