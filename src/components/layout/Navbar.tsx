import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-3 bg-gray-400 flex-col sm:flex-row">
      <Link href="/">
        <h2>Title</h2>
      </Link>
      <ul className="flex gap-8">
        <li className="nav-link">
          <Link href="/about-us">About us</Link>
        </li>
        <li className="nav-link">
          <Link href="/about-us">Career</Link>
        </li>
        <li className="nav-link">
          <Link href="/about-us">Docs</Link>
        </li>
        <li className="nav-link">
          <Link href="/about-us">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
