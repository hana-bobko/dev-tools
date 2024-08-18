import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./side-bar";

interface ToolsLayoutProps {
    children: ReactNode;
}

const ToolsLayout: React.FC<ToolsLayoutProps> = ({ children }) => {
    return (
        <div className="flex-col h-screen">
            <Header />
            {/*             <Sidebar />
             */}{" "}
            <main className="p-4">{children}</main>
        </div>
    );
};

export default ToolsLayout;
