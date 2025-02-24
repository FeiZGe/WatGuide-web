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
      <p className="mt-5 indent-6 text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, in!</p>

    </div>
  );
};

export default Info;
