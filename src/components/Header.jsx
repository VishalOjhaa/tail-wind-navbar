import { useState } from "react";

 function Header(){
    const [menuVisible,setMenuVisible] = useState(false);
    function toggleMenu(){
        setMenuVisible(!menuVisible);
    }
    return (
        <>
        <div className="navbar text-xl bg-black text-white flex justify-between h-10 items-center">
            <div className="left">
                Lenovo<span className="text-red-500">Now</span>
            </div>
            <div className="middle hidden sm:block">
                <a className="p-1 hover:text-blue-500" href="">Home</a>
                <a className="p-1  hover:text-blue-500" href="">About</a>
                <a className="p-1  hover:text-blue-500" href="">Servies</a>
                <a className="p-1  hover:text-blue-500" href="">Products</a>
                <a className="p-1  hover:text-blue-500" href="">Contact</a>
            </div>
            <div className="right hidden sm:block">
                <a className="p-1  hover:text-blue-500" href="">Login</a>
                <a href="" className="p-1  hover:text-blue-500"> Sign Up</a>
            </div>
            <div className="menu-button hover:bg-red-400 sm:hidden">
                <button onClick={()=>toggleMenu()}  aria-expanded={menuVisible}>Menu</button>
            </div>
        </div>
        <div className={`sidebar w-32 sm:hidden text-center absolute right-0 flex flex-col text-xl bg-black text-white ${menuVisible?'block':'hidden'}`}>
                <a className="p-1 hover:text-blue-500" href="">Home</a>
                <a className="p-1  hover:text-blue-500" href="">About</a>
                <a className="p-1  hover:text-blue-500" href="">Services</a>
                <a className="p-1  hover:text-blue-500" href="">Products</a>
                <a className="p-1  hover:text-blue-500" href="">Contact</a>
            </div>
        </>
    );
}

export default Header;