import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-whitebg">
      {/* Hero */}
      <section className="h-full w-full absolute">
      <Image
        src="/image/test.png"
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        fill
        alt="Picture of the author"
      />
      </section>
    </main>
  );
}
