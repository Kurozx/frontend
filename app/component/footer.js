import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";


export default function footer() {
  return (
    <footer className="py-5" class="container text-align">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>เว็ปไซต์</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-muted">Home</Link></li>
              <li className="nav-item mb-2"><Link href="/about" className="nav-link p-0 text-muted">About</Link></li>
              <li className="nav-item mb-2"><Link href="/service" className="nav-link p-0 text-muted">Service</Link></li>
              <li className="nav-item mb-2"><Link href="/contact" className="nav-link p-0 text-muted">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>ติดตามข่าวสาร</h5>
              <p>กรอกอีเมลเพื่อรับข่าวสารและสินค้าใหม่กับเรา.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

      
      </footer>
  );
}