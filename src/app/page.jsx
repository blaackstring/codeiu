"use client";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white font-sans p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {"{ The Next Generation of Coders }"}
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg font-semibold">
          We help students, programmers, and enthusiasts at Integral University
          become industry-ready developers. CodeIU empowers thousands of
          learners to practice, compete, and collaborate, preparing for
          real-world coding interviews and contests.
        </p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button 
          className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Sign up
        </button>
        <button 
          className="bg-black text-white font-semibold py-3 px-8 rounded-lg border border-white hover:bg-gray-900 transition-colors duration-300"
        >
          Join a Contest
        </button>
      </div>
    </div>
  );
}
