import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <div class='container'>
      <div id="carouseExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="img/01.png" class="d-block w-100 img-fluid " alt="..."></img>
            </div>
            <div class="carousel-item">
            <img src="img/02.png" class="d-block w-100 img-fluid " alt="..."></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        <div class="row">
  <div class="col">
    <div class="card h-100">
      <img src="img/item1.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Wooting 60he</h5>
        <p class="card-text">The Wooting 60HE+ is a reality and available for (pre-)order thanks to the original 1298 founders.</p>
        <a href='#' className='btn btn-primary'>Buy</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="img/item2.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Logitech G PRO X SUPERLIGHT 2</h5>
        <p class="card-text">Fast and Precise Wireless Gaming Mouse: A pro gaming icon—now faster and more precise; it is designed in collaboration with the world’s leading esports pros and engineered to win</p>
        <a href='#' className='btn btn-primary'>Buy</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="img/item3.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">FANTECH HELIOS II PRO XD3 V3 (WHITE)</h5>
        <p class="card-text">HELIOS II Pro is designed from massive feedback from the enthusiast and pro player community, in regard to specifications and the classic shape. A true fan-favorite shape perfect for pro players and gamers alike, due to its comfort and suitability for multiple grip types.</p>
        <a href='#' className='btn btn-primary'>Buy</a>
      </div>
    </div>
  </div>
  </div>
  <Footer />
    </>
  );
}


