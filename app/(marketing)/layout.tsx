import { Navbar } from "./_components/navbar";

const Marketinglayout = ({
    children
}:{
    children: React.ReactNode;
}) => {     
    return ( 
        // <div className="h-full dark:bg-[#1F1F1F]">
        <div className="min-h-screen dark:bg-[#1F1F1F]">
            <Navbar />
            {/* <main className="h-full pt-40"> */}
            <main className="pt-40">
                {children}
            </main>
        </div>
     );
}
 
export default Marketinglayout;