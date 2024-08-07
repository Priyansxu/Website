export default function Skills() {
  const languages = ["Python", "JavaScript"];
  const frameworks = ["Next.js", "Tailwind CSS"];

  return (
    <div className="py-3 m-4 bg-[#a5a5a5]/60 rounded-lg">
      <h1 className="text-4xl text-black font-monaSans m-4">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM m-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="py-3 m-3 border border-[#b6b6b6] bg-gradient-to-br from-[#4A4B4F]/50 via-[#71747B] to-[#4A4B4F] opacity-90 rounded-lg">
  <h2 className="text-xl text-gray-300 font-monaSansM m-2">Languages</h2>
  <div className="flex flex-wrap mt-2">
    {languages.map((language, index) => (
      <div
        key={index}
        className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-1 m-1 text-center text-sm text-white"
      >
        {language}
      </div>
    ))}
  </div>
  <h2 className="text-xl text-gray-300 font-monaSansM m-2 mt-4">Frameworks</h2>
  <div className="flex flex-wrap mt-2">
    {frameworks.map((framework, index) => (
      <div
        key={index}
        className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-gray-700 to-gray-800 p-1 m-1 text-center text-sm text-white"
      >
        {framework}
      </div>
    ))}
      </div>
     </div>
    </div>
  );
}