export default function Skills() {
  const languages = ["Python", "JavaScript"];
  const frameworks = ["Next.js", "Tailwind CSS"];

  return (
    <div className="pt-10 m-4">
      <h1 className="text-4xl text-black font-monaSans">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM mt-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="flex flex-wrap mt-6">
        {languages.map((language, index) => (
          <div
            key={index}
            className="rounded-md border border-gray-200 p-2 m-2 text-center"
          >
            {language}
          </div>
        ))}
        {frameworks.map((framework, index) => (
          <div
            key={index}
            className="rounded-md border border-gray-200 p-2 m-2 text-center"
          >
            {framework}
          </div>
        ))}
      </div>
    </div>
  );
}