"use client";

import HomeGallery from '@/components/HomeGallery';
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
        <div className="absolute bottom-0 w-full h-7 rounded-t-full bg-background z-0">
        </div>
      </section>

      {/* Section เนื้อหา */}
      <section className="px-4 max-w-xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pretty">วัดพระปฐมเจดีย์ราชวรมหาวิหาร</h1>
        <p className="text-sm opacity-70 text-pretty mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestias.</p>

        {/* Gallery Part */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:h-52 h-72">
          <HomeGallery css="md:row-span-2 md:col-span-1 col-span-2" />
          <HomeGallery />
          <HomeGallery text="ดูรูปภาพเพิ่มเติม" />
        </div>
        
      </section>

      <div className="h-20">
        {/* space */}
      </div>
    </main>
  );
}
