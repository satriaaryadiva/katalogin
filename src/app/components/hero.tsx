import React from "react"
import Image from "next/image"
import ScrollTriggered from "./ScrollTriggered"

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
              className="   bg-cover rounded-lg border-r-2 border-solid   shadow-2xl"
            />
          </div>
          {/* Text Area */} 
          <div className="w-full md:pl-8  items-center flex justify-center flex-col    text-center h-full  md:w-2/3    md:text-left space-y-6">
            <h1 className="text-2xl/relaxed   text-blue-500 sm:text-3xl md:text-6xl font-bold  leading-tight">
              Digitalisasi UMKM Lebih Mudah dengan Katalogin
            </h1>
            <p className="text-sm/relaxed sm:text-base md:text-lg text-white ">
              Buat katalog anda dan tingkatkan penjualan serta jangkau pelanggan
              lebih luas dengan platform yang dirancang untuk pelaku UMKM.
              Dengan desain responsif dan mudah digunakan. 
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition duration-300">
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
