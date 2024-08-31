import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';
import BootstrapClient from '@/app/component/ฺBootstrapClient'

export default function Home() {
  return (
    <>
      <Navbar />
      <BootstrapClient />
      <div>
        <div className="container">
          <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/01.png" className="d-block w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/02.png" className="d-block w-100 img-fluid" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="card h-100">
                <img src="img/item1.jpg" className="card-img-top h-75" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Wooting 60he</h5>
                  <p className="card-text">The Wooting 60HE+ is a reality and available for (pre-)order thanks to the original 1298 founders.</p>
                  <a href="#" className="btn btn-primary">สั่งซื้อ</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/item2.jpg" className="card-img-top h-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Logitech G PRO X SUPERLIGHT 2</h5>
                  <p className="card-text">Fast and Precise Wireless Gaming Mouse: A pro gaming icon—now faster and more precise; it is designed in collaboration with the world’s leading esports pros and engineered to win</p>
                  <a href="#" className="btn btn-primary">สั่งซื้อ</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/item3.jpg" className="card-img-top h-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">FANTECH HELIOS II PRO XD3 V3 (WHITE)</h5>
                  <p className="card-text">HELIOS II Pro is designed from massive feedback from the enthusiast and pro player community, in regard to specifications and the classic shape. A true fan-favorite shape perfect for pro players and gamers alike, due to its comfort and suitability for multiple grip types.</p>
                  <a href="#" className="btn btn-primary">สั่งซื้อ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='ps-5 ms-5'>
          <Footer />
          </div>
        </div>
      </div>
      
    </>
  );
}