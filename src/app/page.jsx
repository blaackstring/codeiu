export default function Home() {
  return (
    <div className="min-h-screen flex  flex-col justify-center items-center bg-black">
      <div className="w-full max-w-4xl relative">
        <div className="hero-image-container w-full">
          <img src="./image3.png" alt="AI robots building an infinity symbol" className="w-screen h-auto" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center z-10 p-4 sm:pb-32">
          <h1
            className="text-4xl sm:text-6xl font-bold text-white tracking-widest"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            The Contest Platform
          </h1>
          <p
            className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
          >
            CodeIU empowers you to build, test, and deploy smart contracts and decentralized applications faster than ever before.
          </p>
          <div className="mt-10 flex justify-center items-center space-x-4">
            <a href="#" className="glow-button bg-[#4c2aff] text-white font-medium py-3 px-8 rounded-md">
              Get Started
            </a>
            <a href="#" className="outline-button font-medium py-3 px-8 rounded-md backdrop-blur-sm bg-black/10">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black mt-12 px-4 w-full  text-gray-300">
  
      </div>
    </div>
  );
}