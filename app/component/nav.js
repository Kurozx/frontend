import Link from "next/link";

export default function Nav() {
    return (
        <>
            <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><Link href="/" class="nav-link active" aria-current="page">Home</Link></li>
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><Link href="/about" class="nav-link">About</Link></li>
                </ul>
            </header>

        </>
    );

}