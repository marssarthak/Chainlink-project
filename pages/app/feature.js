import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div>
                    <div>hey</div>
                </div>
            </div>
        </div>
    );
}
