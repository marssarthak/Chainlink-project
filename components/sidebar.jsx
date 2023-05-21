import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";

export function Sidebar() {
    const router = useRouter();

    const isActive = (pathname) => {
        return router.pathname === pathname;
    };

    return (
        <div className="w-[18%] h-screen ">
            <ul className="flex flex-col h-screen p-4 bg-gray-400 text-white">
                <li className={isActive("/app/dashboard") ? "text-blue-500" : ""}>
                {/* <li> */}
                    <div className="relative inline-block w-full text-left">
                        <Link
                            className="hover:opacity-75 lg:pl-5 lg:pr-5"
                            href="/app/dashboard"
                        >
                            Dashboard
                        </Link>
                    </div>
                </li>
                <li className={isActive("/app/feature") ? "text-blue-500" : ""}>
                <div className="relative inline-block w-full text-left">
                        <Link
                            className="hover:opacity-75 lg:pl-5 lg:pr-5"
                            href="/app/feature"
                        >
                            Other feature
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
        // <div>sidebar</div>
    );
};
