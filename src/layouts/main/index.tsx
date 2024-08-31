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
            <div className="flex w-full">
                <SideNav />
                <main className="flex w-full h-screen mt-9 bg-gray-800">
                    <div className="bg-white rounded-lg  mt-9 mx-9 w-full overflow-auto ">{children}</div>
                </main>
            </div>
        </>
    );
}
