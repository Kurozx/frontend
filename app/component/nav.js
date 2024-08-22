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
            <li><a href="./" class="nav-link px-3 link-secondary">หน้าแรก</a></li>
            <li><Link href="/about" class="nav-link px-3 link-secondary">เกี่ยวกับ</Link></li>
            <li><Link href="/service" class="nav-link px-3 link-secondary">บริการ</Link></li>
            <li><Link href="/users" class="nav-link px-3 link-secondary">จัดการสมาชิก</Link></li>
            <li><Link href="/contact" class="nav-link px-3 link-secondary">ติดต่อ</Link></li>
        </ul>

        <div class="col-md-0 text-end">
            <Link href="/signup" class="btn btn-outline-primary me-2">SignUp</Link>
            <button type="button" class="btn btn-success">SignIn</button>
        </div>
        </header>
        </>
    );

}