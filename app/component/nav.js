import Link from "next/link";

export default function Nav() {
    return (
        <>
        <header class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
        <a class="navbar-brand" href="/">
            <img src="img/Logo.png" alt="Bootstrap" width="80" height="80"></img>
            </a>
        </div>

        <ul class="nav col-12 col-md-5 mb-2 justify-content-end mb-md-0">
            <li><a href="/" class="nav-link px-3 link-secondary">Home</a></li>
            <li><Link href="/about" class="nav-link px-3 link-secondary">About</Link></li>
            <li><Link href="/service" class="nav-link px-3 link-secondary">Service</Link></li>
            <li><Link href="/contact" class="nav-link px-3 link-secondary">Contact</Link></li>
        </ul>

        <div class="col-md-0 text-end">
            <button type="button" class="btn btn-outline-primary me-2">SignUp</button>
            <button type="button" class="btn btn-success">SignIn</button>
        </div>
        </header>
        </>
    );

}