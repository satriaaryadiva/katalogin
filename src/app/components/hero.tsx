import React from "react"
import Image from "next/image"
import ScrollTriggered from "./ScrollTriggered"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"

const Hero = () => {
  return (
    <main className=" w-full h-full text-white   flex flex-col items-center  justify-around">
      {/* HERO SECTION */}
      <section className="w-full  md:pl-8 px-4 py-20  md:py-10 bg-[#101d1c]">
        <div className="max-w-screen-xl  mx-auto flex flex-col-reverse md:flex-row-reverse   items-center gap-8">
            <div className="w-full md:w-1/2 md:pt-10 flex flex-col items-center">
            <Image
              priority
              src="/logo.png"
              alt="Logo"
              width={350}
              objectFit="cover"
              objectPosition="center"
              height={350}
              className="   rounded-lg     shadow-2xl"
            />
          </div>
          {/* Text Area */} 
          <div className="w-full h-full md:pl-8 relative   items-center flex justify-center flex-col    text-center    md:w-2/3 py-10 md:mt-[-110px]  md:text-left space-y-6">
            <ContainerTextFlip/>
            <h1 className="text-2xl/relaxed   text-white sm:text-3xl md:text-6xl font-bold  leading-tight">
              Digitalisasi Bisnis anda Lebih Mudah dengan  <span className="text-yellow-500  ">katalog</span> <span className="text-blue-500 ">in</span> 
           </h1>
           
           
            <button className="px-6 py-3 bg-blue-400 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition duration-300">
              Mulai Sekarang
            </button>
          </div>

          {/* Image Area */}
        
        </div>
      </section>

      {/* FITUR SECTION */}
      <section className="w-full  ">
        <div className="  mx-auto  ">
          <ScrollTriggered />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border rounded-xl shadow-sm bg-white text-center text-black">
              <h3 className="font-bold text-xl mb-2">Katalog Digital</h3>
              <p>
                Mudah membuat, mengatur, dan membagikan katalog produk UMKM kamu.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white text-center text-black">
              <h3 className="font-bold text-xl mb-2">Desain Profesional</h3>
              <p>
                Template responsif yang tampak elegan di semua perangkat, tanpa
                coding.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white text-center text-black">
              <h3 className="font-bold text-xl mb-2">Bagikan Instan</h3>
              <p>
                Bagikan katalog kamu via WhatsApp, media sosial, atau link khusus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
