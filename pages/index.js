import Particles from "../components/Particles";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#a5a5a5] to-[#d5d5d5] text-[#4B5462] relative overflow-hidden">
<div className="relative h-24">
  <div
    className="absolute top-0 left-0 w-full bg-black z-30"
    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 85% 100%, 15% 100%, 0% 60%)" }}
  ></div>
</div>
      <Particles quantity={150} />
      <main className="pt-20 relative">
        <Header />
        <Profile />
        <Skills />
      </main>
    </div>
  );
}