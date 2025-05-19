import Image from "next/image";
import ScrollTriggered from "./ScrollTriggered";

const Hero = () => {
  return (
    <main className="  text-gray-900">
      {/* SECTION HERO */}
      <section
        className="flex flex-col items-center justify-center px-4 p  text-center    "
          
      >
        <div className="max-w-screen-xl w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Digitalisasi UMKM Lebih Mudah dengan
          </h1>

          <Image
            priority
            src="/logo.png"
            alt="Logo"
            width={350}
            height={350}
            className="mx-auto my-6"
          />

          <p className="text-base md:text-xl max-w-3xl mx-auto mb-8">
            Buat katalog anda dan tingkatkan penjualan serta jangkau pelanggan
            lebih luas dengan platform yang dirancang untuk pelaku UMKM. Dengan
            desain responsif dan mudah digunakan, anda dapat membuat katalog
            produk yang menarik.
          </p>

          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition">
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* SECTION FITUR */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <ScrollTriggered />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-bold text-xl mb-2">Katalog Digital</h3>
            <p>
              Mudah membuat, mengatur, dan membagikan katalog produk UMKM kamu.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-bold text-xl mb-2">Desain Profesional</h3>
            <p>
              Template responsif yang tampak elegan di semua perangkat, tanpa
              coding.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-bold text-xl mb-2">Bagikan Instan</h3>
            <p>
              Bagikan katalog kamu via WhatsApp, media sosial, atau link
              khusus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
