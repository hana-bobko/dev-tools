// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 p-4">
            <ul className="space-y-2">
                <li>
                    <Link href="/dashboard">
                        <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link href="/settings">
                        <p className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Settings</p>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
