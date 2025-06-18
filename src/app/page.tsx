 
import Hero from "./components/hero";
import Navbar from "./components/nav";

export default async function Home() {
  return (
    <div className="  items-center justify-items-center min-h-screen  w-full   font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
     
      <Hero/>
    </div>
  );
}
