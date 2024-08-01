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
    <div className="pt-10 m-4">
      <h1 className="text-4xl text-[#A3A3A3] font-monaSans">Skills</h1>
      <h5 className="text-sm text-left text-[#A3A3A3] font-monaSansM mt-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="mt-6">
        <h2 className="text-xl text-[#A3A3A3] font-monaSansM">Languages</h2>
        <div className="flex flex-wrap mt-2">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-2 m-1 text-center text-sm text-[#A3A3A3]"
            >
              <div className={`w-3 h-3 rounded-full mr-2 ${circleColors[language]}`}></div>
              {language}
            </div>
          ))}
        </div>
        <h2 className="text-xl text-[#A3A3A3] font-monaSansM mt-4">Frameworks</h2>
        <div className="flex flex-wrap mt-2">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-2 m-1 text-center text-sm text-[#A3A3A3]"
            >
              <div className={`w-3 h-3 rounded-full mr-2 ${circleColors[framework]}`}></div>
              {framework}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}