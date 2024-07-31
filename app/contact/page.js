import Navbar from '/app/component/nav';
import Footer from '/app/component/footer';

export default function contact() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Message" aria-label="Message"></input>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
      <Footer />


    </>

  );
}