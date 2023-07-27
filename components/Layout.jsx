import Sidebar from "./Sidebar";
import remarks from "../data/remarks";

const Layout = ({ children }) => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 ">
                <Sidebar />
            </div>
            <div className="col-span-3 mx-8">{children ? children :
                <div className="h-screen flex flex-col justify-center"><h2 className="text-4xl indent-4">{remarks.header}</h2>
                    <div className="indent-6">{remarks.body}</div>
                </div>
            }</div>
        </div>
    );
}

export default Layout;