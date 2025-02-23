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
        <h1 className="text-4xl md:text-6xl font-bold text-pretty">วัดพระปฐมเจดีย์<br></br>ราชวรมหาวิหาร</h1>
        <p className="text-xs opacity-40 text-pretty mb-1">ต.พระปฐมเจดีย์ อ.เมืองนครปฐม จ.นครปฐม</p>
        <p className="text-sm opacity-70 text-pretty mb-5 indent-8">เมื่อเอ่ยถึงนครปฐม หลายคนคงนึกถึง <b>วัดพระปฐมเจดีย์ราชวรมหาวิหาร</b> ซึ่งเป็นที่ประดิษฐานของพระเจดีย์ที่ใหญ่ที่สุดในประเทศไทย แต่สิ่งที่ทำให้ที่นี่น่าหลงใหลไม่ได้มีเพียงแค่สถาปัตยกรรมทางศาสนาเท่านั้น บรรยากาศรอบๆ วัดยังเต็มไปด้วยเสน่ห์ของวัฒนธรรม ประวัติศาสตร์ และวิถีชีวิตอันมีเอกลักษณ์ที่รอให้คุณมาสัมผัส</p>

        {/* Gallery Part */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:h-52 h-72">
          <HomeGallery img="/image/gallery/1.jpg" css="md:row-span-2 md:col-span-1 col-span-2" />
          <HomeGallery img="/image/gallery/2.jpg" />
          <HomeGallery img="/image/gallery/3.jpg" text="40+ รูปภาพ" />
        </div>
        
      </section>

      <div className="h-20">
        {/* space */}
      </div>
    </main>
  );
}
