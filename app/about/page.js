import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';

export default function about() {
  return (
    <>
      <Navbar />
      <div class='container'>
      <h2>
      เกี่ยวกับเรา
      </h2>
      <h1>
      เราคือผู้นำด้านการจำหน่ายเมาส์และคีย์บอร์ดคุณภาพสูงสำหรับทุกความต้องการ 
      ไม่ว่าคุณจะเป็นเกมเมอร์ นักออกแบบ หรือผู้ใช้คอมพิวเตอร์ทั่วไป เรามีผลิตภัณฑ์ที่เหมาะสมสำหรับคุณ ทุกชิ้นผ่านการคัดสรรอย่างพิถีพิถัน เพื่อให้คุณได้รับประสบการณ์การใช้งานที่ดีที่สุด
      </h1>
      </div>

      <Footer />


    </>
    
  );
}