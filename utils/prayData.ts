const prays = [
    { 
      "id": 1, 
      "name": "องค์พระปฐมเจดีย์", 
      "description": "ถือเป็นพระมหาเจดีย์ที่มีขนาดใหญ่ที่สุดในประเทศไทย เดิมมีชื่อเรียกว่า “พระธมเจดีย์” ประวัติความเป็นมาขององค์พระปฐมเจดีย์มีมาอย่างยาวนานย้อนกลับไปถึงยุคสุวรรณภูมิ คาดว่าถูกสร้างขึ้นเมื่อคราวที่พระสมณทูตในพระเจ้าอโศกมหาราช เดินทางมาเผยแผ่ศาสนายังสุวรรณภูมิ องค์พระปฐมเจดีย์นั้นเป็นพระเจดีย์ขนาดใหญ่ รูปทรงระฆังคว่ำ โครงสร้างเดิมเป็นไม้ซุง รัดด้วยโซ่เส้นใหญ่ ก่อด้วยอิฐ ก่อนจะได้รับการปฏิสังขรณ์ในครั้งแรกโดยพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 4)ขณะที่ทรงยังผนวชได้ธุดงค์และพบองค์พระปฐมเจดีย์ที่อยู่ในสภาพเก่าแก่ชำรุดทรุดโทรม",
      "short_description": "ถือเป็นพระมหาเจดีย์ที่มีขนาดใหญ่ที่สุดในประเทศไทยเดิมมีชื่อเรียกว่า “พระธมเจดีย์”"
    },
    { 
      "id": 2, 
      "name": "พระพุทธไสยาสน์", 
      "description": "พระพุทธไสยาสน์ ยาว 17 เมตร ที่มีความงดงามมากองค์นี้ รัชกาลที่ 4 โปรดให้สร้างขึ้นเพื่อประดิษฐานเป็นพระประธานในพระวิหารด้านตะวันตก",
      "short_description": "พระพุทธไสยาสน์ ยาว 17 เมตร ที่มีความงดงามมากองค์นี้ รัชกาลที่ 4"
    },
    { 
      "id": 3, 
      "name": "ศาลเจ้าพ่อปราสาททอง", 
      "description": "ตั้งอยู่ด้านนอกพระระเบียงคดบริเวณทางลงมีลักษณะคล้ายถ้ำที่สร้างขึ้นเมื่อเดินลงมาจะพบศาลเจ้าพ่อปราสาททองที่เป็นศาลเจ้าจีน ประดับด้วยเครื่องบูชาเพื่ออานิสงส์การถวายดอกบัวและธงชัย",
      "short_description": "ตั้งอยู่ด้านนอกพระระเบียงคดบริเวณทางลงมีลักษณะคล้ายถ้ำที่สร้างขึ้นเมื่อเดินลงมาจะพบศาลเจ้าพ่อปราสาททองที่เป็นศาลเจ้าจีน"
    },
    { 
      "id": 4, 
      "name": "ภาพจิตรกรรมฝาผนัง", 
      "description": "ในวิหารแต่ละหลังของวัดแห่งนี้ จะมี “ภาพวาดจิตรกรรมฝาผนัง” ที่งดงามอยู่ ไม่ว่าจะเป็นภาพที่วาดให้เห็นด้านในขององค์พระเจดีย์ที่หาชมได้ยากในวิหารหลวงด้านทิศใต้ ตั้งแต่ในอดีตที่เป็นสถูปมียอดปรางค์ จนเป็นทรงระฆังอย่างในปัจจุบัน หรือจะเป็นภาพเทพชุมนุมที่มีรูปร่างหน้าตา สรีระ และท่าทางที่มีความสมจริง ก็มีความงดงามไม่แพ้กัน",
      "short_description": "ในวิหารแต่ละหลังของวัดแห่งนี้ จะมี “ภาพวาดจิตรกรรมฝาผนัง” ที่งดงามอยู่"
    },
    { 
      "id": 5, 
      "name": "สถูปจำลองพระปฐม เจดีย์องค์เก่า", 
      "description": "พระปฐมเจดีย์ถูกสร้างและบูรณะใหม่แล้วถึง 4 ครั้ง โดยได้สร้างครอบเจดีย์องค์เดิมไว้ จนกระทั่งเสร็จสมบูรณ์เป็นเจดีย์ในรูปแบบปัจจุบันในสมัยรัชกาลที่ 5 โดยเราจะเห็นรูปทรงของเจดีย์ในยุคก่อนได้จากเจดีย์จำลององค์นี้ซึ่งตั้งอยู่ทางทิศใต้ขององค์พระปฐมเจดีย์",
      "short_description": "พระปฐมเจดีย์ถูกสร้างและบูรณะใหม่แล้วถึง 4 ครั้ง โดยได้สร้างครอบเจดีย์องค์เดิมไว้"
    },
    { 
      "id": 6, 
      "name": "พระพุทธรูปปางต่างๆ", 
      "description": "โดยรอบขององค์พระปฐมเจดีย์จะมีพระพุทธรูปปางต่างๆ ตั้งอยู่ล้อมรอบ ซึ่งจะมีป้ายข้อมูลติดไว้บริเวณพระพุทธรูปทุกปาง เพื่อให้อ่านละเข้าใจง่ายขึ้น",
      "short_description": "โดยรอบขององค์พระปฐมเจดีย์จะมีพระพุทธรูปปางต่างๆ ตั้งอยู่ล้อมรอบ"
    },
    { 
      "id": 7, 
      "name": "อุโบสถหลวง/หลวงพ่อประทานพร", 
      "description": "พระอุโบสถหลวง เป็นสถาปัตยกรรมสมัยใหม่ที่บูรณะใน รัชกาลที่ 7 โดยสมเด็จเจ้าฟ้า กรมพระยานริศรานุวัดติวงศ์ ภายในมีพระประธานที่มีพระพุทธลักษณะเช่นเดียวกับพระพุทธรูป ทางด้านทิศใต้มีพระนามว่า “หลวงพ่อประทานพร” เป็นพระพุทธ รูปปางมารวิชัย ทำมาจากศิลาขาวขนาดใหญ่",
      "short_description": "พระอุโบสถหลวง เป็นสถาปัตยกรรมสมัยใหม่ที่บูรณะใน รัชกาลที่ 7 โดยสมเด็จเจ้าฟ้า กรมพระยานริศรานุวัดติวงศ์"
    },
    { 
      "id": 8, 
      "name": "ระเบียงคด", 
      "description": "รอบฐานเจดีย์มี “ระเบียงคด” ล้อมรอบเป็นวงกลม ที่ระเบียงคตตรงทิศทั้งสี่มีวิหารประจำทิศ ถัดเข้าไปเป็นลานประทักษิณ แล้วเป็นฐานเป็นชั้นขึ้นไปจนถึงฐาน",
      "short_description": "รอบฐานเจดีย์มี “ระเบียงคด” ล้อมรอบเป็นวงกลม"
    },
    { 
      "id": 9, 
      "name": "พระพุทธรูปศิลาขาว", 
      "description": "เป็นพระพุทธรูปสมัยทวารวดีปางปฐมเทศนา ประทับนั่งห้วยพระบาท มีขนาดใหญ่กว่าคนธรรมดาสามเท่า ขุดพบสี่องค์ที่วัดพระเมรุ ซึ่งเป็นวัดเก่าสมัยทวารวดี มีอายมากว่าหนึ่งพันปี ตั้งอยู่ที่สวนนันทอุทยาน ตำบลห้วยจรเข้ อำเภอเมือง ฯ ห่างจากองค์พระปฐมเจดีย์ไปทางทิศใต้ไม่ไกลนัก",
      "short_description": "เป็นพระพุทธรูปสมัยทวารวดีปางปฐมเทศนา ประทับนั่งห้วยพระบาท มีขนาดใหญ่กว่าคนธรรมดาสามเท่า"
    },
    { 
      "id": 10, 
      "name": "ตุ๊กตาจีน", 
      "description": "จีนได้เข้ามาในประเทศไทยในช่วงสมัยรัชกาลที่ 3 โดยชาวจีนได้โล้สำเภานำสินค้ามาขายที่ประเทศไทย โดยตุ๊กตาจีนจะใช้ในการถ่วงเรือสินค้าไม่ให้โคลงเคลงเมื่อเจอลมพายุ จนเมื่อพ่อค้ามีมาก ตุ๊กตาจีนจึงมีมากตามไปด้วย รัชกาลที่ 3 จึงได้โปรดเกล้าฯ ให้นำไปประดับไว้ตามวัดต่างๆ",
      "short_description": "จีนได้เข้ามาในประเทศไทยในช่วงสมัยรัชกาลที่ 3 โดยชาวจีนได้โล้สำเภานำสินค้ามาขายที่ประเทศไทย"
    }
]

export default prays;