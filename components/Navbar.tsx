import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/rooms">Rooms</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/attractions">Attractions</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl font-serif text-brand">
                    {SITE_CONFIG.name}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/rooms">Rooms</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/attractions">Attractions</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/rooms" className="btn btn-primary text-white">
                    Book Now
                </Link>
            </div>
        </div>
    );
}
