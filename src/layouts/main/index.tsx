import React, { ReactNode } from "react";
import Header from "./header";
import SideNav from "./side-nav";
interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="flex w-full h-screen">
                <SideNav />
                <main className="flex w-full h-full bg-gray-800">
                    <div className="bg-white rounded-lg h-auto  mx-9 pt-12 w-full overflow-auto ">{children}</div>
                </main>
            </div>
        </>
    );
}
