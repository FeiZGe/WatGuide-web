import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      {/* Hero */}
      <section className="h-60 w-full relative">
        {/* ภาพพื้นหลัง */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/test.png"
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            fill
            priority
            alt="Picture of hero"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm -z-10"></div>

        {/* Content */}
        <div className="absolute bottom-0 w-full h-7 rounded-t-full bg-background z-10">
        </div>
      </section>

      {/* Section อื่นๆ */}
      <section className="p-4">
        <h1 className="text-2xl font-bold">Hello</h1>
      </section>
    </main>
  );
}
