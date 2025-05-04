import React, { ReactNode } from "react";
import Link from "next/link";
import { sideNavItem } from "./side-nav-item";
export default function SideNav() {
    return (
        <div className="max-h-screen w-96 mt-9 bg-sky-950 text-white flex flex-col">
            <nav className="flex-1 text-2xl">
                <ul className="mt-9">
                    {sideNavItem.map((item, index) => (
                        <Link key={item?.id} href={item?.path} style={{ background: "red" }}>
                            <div className="flex w-full align-middle pl-4 py-2 gap-3 hover:bg-gray-700 cursor-pointer">
                                {item?.icon}
                                <li className="flex">{item?.title}</li>
                            </div>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
