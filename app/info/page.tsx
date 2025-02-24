import ImageItem from "@/components/ImageItem";

const Info = () => {
  return (
    <div>
      <h3 className="text-5xl font-semibold text-center mb-3">วัดพระปฐมเจดีย์</h3>
      <h3 className="text-3xl font-semibold mb-3 bg-gradient-to-br from-amber-600 to-red-500 text-transparent bg-clip-text">ความเป็นมา</h3>

      <ImageItem path="/image/gallery/5.jpg" />

      <p className="mt-5 indent-6 text-pretty"><b>วัดพระปฐมเจดีย์</b> เป็นวัดเก่าแก่คู่บ้านคู่เมืองนครปฐมและประเทศไทย เชื่อกันว่าสร้างขึ้นตั้งแต่สมัยพระเจ้าอโศกมหาราช เดิมมีลักษณะเป็นเจดีย์ทรงโอคว่ำ ต่อมาในสมัยรัชกาลที่ 4 ทรงโปรดเกล้าฯ ให้บูรณะใหม่เป็นเจดีย์ทรงระฆังคว่ำแบบลังกาอย่างที่เห็นในปัจจุบัน ภายในบรรจุ<b>พระบรมสารีริกธาตุของพระพุทธเจ้า</b> จึงเป็นที่เคารพสักการะของพุทธศาสนิกชนทั่วประเทศ นอกจากนี้ วัดพระปฐมเจดีย์ยังมีสถาปัตยกรรมที่งดงามและมีความสำคัญทางประวัติศาสตร์และวัฒนธรรมอีกด้วย</p>

      <h3 className="text-3xl font-semibold mt-3 mb-1 bg-gradient-to-br from-amber-600 to-red-500 text-transparent bg-clip-text">ความสำคัญ</h3>
      <ul className="list-disc pl-4 mb-3">
        <li>เป็นปูชนียสถานสำคัญของประเทศไทย</li>
        <li>เป็นศูนย์รวมจิตใจของพุทธศาสนิกชนทั่วประเทศ</li>
        <li>เป็นสถานที่ท่องเที่ยวทางวัฒนธรรมที่สำคัญ</li>
      </ul>

      <ImageItem path="/image/gallery/8.jpg" />
      <h3 className="text-3xl font-semibold mt-5 mb-1 bg-gradient-to-br from-amber-600 to-red-500 text-transparent bg-clip-text">งานวัดประจำปี</h3>
      <p className="indent-6 text-pretty mb-2">เทศกาลนมัสการองค์พระปฐมเจดีย์เป็นงานประจำปีที่ยิ่งใหญ่ของวัดพระปฐมเจดีย์ราชวรมหาวิหาร จังหวัดนครปฐม จัดขึ้นเป็นประจำทุกปี ในวันขึ้น 12 ค่ำ เดือน 12 ถึงวันแรม 5 ค่ำ เดือน 12 รวม 9 วัน 9 คืน</p>
      <ImageItem path="/image/gallery/41.jpg" />
      <p className="indent-6 text-pretty mt-2">โดยจัดขึ้นเพื่อบูชา<b>พระบรมสารีริกธาตุ</b>ที่บรรจุอยู่ภายในองค์พระปฐมเจดีย์ และเพื่อให้พุทธศาสนิกชนได้มีโอกาสมานมัสการ<b>พระร่วงโรจนฤทธิ์</b> พระพุทธรูปเก่าแก่คู่บ้านคู่เมืองนครปฐม อีกทั้งยังเป็นการร่วมกันบริจาคทรัพย์บำรุงรักษาองค์พระปฐมเจดีย์ให้มั่นคงสืบต่อไป</p>
      <p className="indent-6 text-pretty">งานนมัสการองค์พระปฐมเจดีย์มีมาแต่โบราณ เริ่มมีมาตั้งแต่สมัยรัชกาลที่ 4 หลังจากที่โปรดเกล้าฯ ให้บูรณปฏิสังขรณ์องค์พระปฐมเจดีย์ครั้งใหญ่ และยังให้ขุดคลองเจดีย์ ตั้งแต่ <b>บ้านท่านา</b> มาจนถึงกลางเมืองนครปฐม</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 mb-1">
        <ImageItem path="/image/gallery/9.jpg" />
        <ImageItem path="/image/gallery/19.jpg" />
      </div>

      <p className="text-xl font-semibold mt-2">กิจกรรมภายในงาน</p>
      <ul className="list-disc pl-4">
        <li>การนมัสการองค์พระปฐมเจดีย์และพระร่วงโรจนฤทธิ์</li>
        <li>การออกร้านจำหน่ายสินค้าพื้นเมืองและสินค้าต่างๆ มากมาย</li>
        <li>การแสดงมหรสพต่างๆ เช่น คอนเสิร์ต รำวง และการแสดงพื้นบ้าน</li>
        <li>การแสดงแสง สี ดนตรี</li>
        <li>การทำบุญต่างๆ</li>
      </ul>

    </div>
  );
};

export default Info;
