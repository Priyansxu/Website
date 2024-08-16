import Particles from "../components/Particles";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#DEDFE3] to-[#DBDCDE] text-[#696868]/80 relative overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-700 to-transparent backdrop-blur-lg"></div>
      <Particles quantity={150} />
      <main className="relative">
        <Header className="my-8" />
        <Profile className="my-8" />
        <Skills className="my-8" />
        <Projects className="my-8" />
      </main>
    </div>
  );
}

{/*  [#a5a5a5]  [#d5d5d5] [#4B5462] */}