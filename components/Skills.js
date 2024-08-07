export default function Skills() {
  const languages = ["Python", "JavaScript"];
  const frameworks = ["Next.js", "Tailwind CSS"];

  const circleColors = {
    Python: "bg-blue-300",
    JavaScript: "bg-yellow-300",
    "Next.js": "bg-purple-300",
    "Tailwind CSS": "bg-green-300"
  };

  return (
    <div className="py-3 m-4 bg-[#a5a5a5]/60 rounded-lg">
      <h1 className="text-4xl text-black font-monaSans m-4">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM m-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
   <div className="mx-4">
      <div className="py-3 m-4 border border-[#b6b6b6] bg-gradient-to-br via-[#71747B] to-[#4A4B4F] rounded-lg">
        <h2 className="text-xl text-gray-700 font-monaSansM m-2">Languages</h2>
        <div className="flex flex-wrap mt-2">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-2 text-center text-sm text-white"
            >
              <div className={`w-3 h-3 rounded-full mr-2 ${circleColors[language]}`}></div>
              {language}
            </div>
          ))}
        </div>
        <h2 className="text-xl text-gray-700 font-monaSansM m-2">Frameworks</h2>
        <div className="flex flex-wrap mt-2">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-2 text-center text-sm text-white"
            >
              <div className={`w-3 h-3 rounded-full mr-2 ${circleColors[framework]}`}></div>
              {framework}
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
}