export default function Skills() {
  const languages = ["Python", "JavaScript"];
  const frameworks = ["Next.js", "Tailwind CSS"];

  return (
    <div className="pt-10 m-4">
      <h1 className="text-4xl text-black font-monaSans">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM mt-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="mt-6">
        <h2 className="text-xl text-black font-monaSansM">Languages</h2>
        <div className="flex flex-wrap mt-2">
          {languages.map((language, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-400 bg-gradient-to-br from-[#a5a5a5] via-[#f5f5f5] to-[#dcdcdc] p-1 m-1 text-center text-sm"
            >
              {language}
            </div>
          ))}
        </div>
        <h2 className="text-xl text-black font-monaSansM mt-4">Frameworks</h2>
        <div className="flex flex-wrap mt-2">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="rounded-md border bg-gradient-to-br from-[#a5a5a5] via-[#f5f5f5] to-[#dcdcdc] border-gray-400 p-1 m-1 text-center text-sm"
            >
              {framework}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}