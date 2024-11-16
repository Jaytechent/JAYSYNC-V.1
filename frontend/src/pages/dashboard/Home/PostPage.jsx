import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../layout/Dash/Navbar";
import Sidebar from "../../../layout/Dash/Sidebar";
import PostForm from "../Home/PostForm"; 

const PostPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showPostForm, setShowPostForm] = useState(false); 

    useEffect(() => {
       
        setShowPostForm(true);
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-2">
                        { <PostForm />} 
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PostPage;