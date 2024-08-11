import Particles from "../components/Particles";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#DEDFE3] to-[#DBDCDE] text-[#696868] relative overflow-hidden">
      <Particles quantity={150} />
      <main className="relative">
        <Header />
        <Profile />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

{/*  [#a5a5a5]  [#d5d5d5] [#4B5462] */}