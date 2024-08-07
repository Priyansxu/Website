export default function Skills() {
  const languages = ["Python", "JavaScript"];
  const frameworks = ["Next.js", "Tailwind CSS"];

  return (
    <div className="py-3 m-4 bg-[#a5a5a5]/60 rounded-lg">
      <h1 className="text-4xl text-black font-monaSans m-4">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM m-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="py-4 px-6 m-4 border border-gray-300 bg-gradient-to-br from-blue-900 via-gray-700 to-gray-800 opacity-90 rounded-lg shadow-lg">
  <h2 className="text-2xl text-white font-semibold m-3">Languages</h2>
  <div className="flex flex-wrap mt-4">
    {languages.map((language, index) => (
      <div
        key={index}
        className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-blue-800 to-blue-900 p-3 m-2 text-center text-sm text-white transition-transform transform hover:scale-105"
      >
        {language}
      </div>
    ))}
  </div>
  <h2 className="text-2xl text-white font-semibold m-3 mt-6">Frameworks</h2>
  <div className="flex flex-wrap mt-4">
    {frameworks.map((framework, index) => (
      <div
        key={index}
        className="flex items-center rounded-md border border-gray-500 bg-gradient-to-b from-blue-800 to-blue-900 p-3 m-2 text-center text-sm text-white transition-transform transform hover:scale-105"
      >
        {framework}
      </div>
    ))}
  </div>
</div>
    </div>
  );
}