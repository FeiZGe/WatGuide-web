import GalleryCard from "@/components/GalleryCard"

const Gallery = () => {
  // สร้างอาร์เรย์ตัวเลข 1 ถึง 43
  const images = Array.from({ length: 43 }, (_, i) => i + 1)

  // สุ่มเรียงลำดับรูปแบบไม่ซ้ำกัน
  const shuffledImages = images.sort(() => Math.random() - 0.5)

  return (
    <div className="columns-2 md:columns-3 gap-3 space-y-3">
      {shuffledImages.map((num) => (
        <GalleryCard key={num} img={`/image/gallery/${num}.jpg`} />
      ))}
    </div>
  )
}

export default Gallery
