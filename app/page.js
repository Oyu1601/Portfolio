import Image from "next/image";
import Hero from "@/component/hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero/>
      
      </div>
       
      </>
    </main>
  );
}
