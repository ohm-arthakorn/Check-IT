import Head from "next/head";
export default function Index() {
  
  return (
    <div className="flex flex-col items-center my-8">
      <Head>
        <title>
          Check-IT
        </title>
      </Head>
      <div id="Introduction-Content" className="flex flex-col items-center w-80">
        <h1 className="font-bold text-3xl font-serif my-2">
          Introduction
        </h1>
        <p className="font-serif text-xl">
        เว็บไซต์นี้สร้างขึ้นเพื่อต้องการเป็นแนวทางสำหรับการพัฒนาต่อในการเปลี่ยนรูปแบบการบันทึกการเข้าเรียนโดยจากเดิมที่มีการบันทึกการเข้าเรียนด้วยกระดาษ ทางคณะผู้จัดทำเล็งเห็นถึงการเติบโตของซอร์ฟแวร์อย่างต่อเนื่อง ทางคณะผู้จัดทำจึงเลือกที่จะเปลี่ยนรูปแบบของการบันทึกการเข้าเรียนจากบันทึกการเข้าเรียนด้วยกระดาษเป็นการบันทึกการเข้าเรียนด้วยเว็บแอปพลิเคชันแทนโดยที่เลือกการบันทึกการเข้าเรียนด้วยเว็บแอปพลิเคชันเนื่องจากเว็บแอปพลิเคชันสามารถเข้าได้จากทุกอุปกรณ์ไม่ว่าจะเป็นโทรศัพท์มือถือ, คอมพิวเตอร์, Ipad เป็นต้น
        </p>
        <div className="flex flex-col items-center my-4">
          <img src="/Img/PJ01.png" alt="Checking Picture"/>
        </div>
      </div>
    </div>
  );
};