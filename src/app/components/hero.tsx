import Image from "next/image";
import ScrollTriggered from "./ScrollTriggered";
 
 const Hero = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center px-4 text-center py-24 bg-gradient-to-b from-indigo-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Digitalisasi UMKM Lebih Mudah dengan <Image priority src="/logo.png" alt="Logo" width={350} height={350} className="inline-block w-auto" />
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Buat katalog produk digital dalam hitungan menit. Tingkatkan penjualan dan jangkau pelanggan lebih luas dengan platform yang dirancang untuk pelaku UMKM.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition">
          Mulai Sekarang
        </button>
      </section>

      <section className="px- py-1 max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-center">Service</h1>
        <ScrollTriggered/>
      
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Katalog Digital</h3>
            <p>Mudah membuat, mengatur, dan membagikan katalog produk UMKM kamu.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Desain Profesional</h3>
            <p>Template responsif yang tampak elegan di semua perangkat, tanpa coding.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Bagikan Instan</h3>
            <p>Bagikan katalog kamu via WhatsApp, media sosial, atau link khusus.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Hero;