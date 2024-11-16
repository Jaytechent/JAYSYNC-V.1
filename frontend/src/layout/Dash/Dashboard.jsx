import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MultiAuthPage from "../../pages/dashboard/Home/MultiAuthPage"; // Import your multipage component

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMultiPage, setShowMultiPage] = useState(false); // State to manage multipage visibility

    useEffect(() => {
       
        setShowMultiPage(true);
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-2">
                        { <MultiAuthPage />} 
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;








// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//     const [sidebarOpen, setSidebarOpen] = useState();
//     return (
//         <div className="flex h-screen">
//             <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto">
//                     <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-2">
//                         <Outlet />
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
