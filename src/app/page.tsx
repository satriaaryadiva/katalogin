 
import Hero from "./components/hero";
import Navbar from "./components/nav";

export default function Home() {
  return (
    <div className="  items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <Hero/>
    </div>
  );
}
