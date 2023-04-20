import React from "react";
// import { main_logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import {Link} from 'react-scroll'


const NavBar = () =>{
    return(<div className="w-full sticky top-0 bg-bodyColor z-50 h-18 mx-auto flex justify-between items-center font-titleFont border-b-[1px] pb-1 border-b-gray-600">
            
           {/* <div><img src={main_logo} alt=".."/></div> */}
           <div><h2 className="px-3 py-4 text-3xl">! My Protfolio</h2></div>
           <div>
            <ul className="flex gap-10 items-center">
                {
                    navLinksdata.map(({_id,title,link})=>{
                        return <li 
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" 
                        key={_id}>
                            <Link 
    activeClass="active"
    to={link}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>{title}</Link>
                        </li>
                    })
                }
            </ul>
           </div>
    </div>)
}

export default NavBar;






























