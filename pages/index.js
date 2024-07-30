import Particles from "../components/Particles";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      <Particles quantity={100} />
      <main className="pt-20 relative">
        <Header />
        <Profile />
        <Skills />
      </main>
    </div>
  );
}