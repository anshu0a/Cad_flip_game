
import "../../cssFile/flip-css/flipmain.css";
import Back from "../goback"
import { useState } from "react";



export default function flipmain({handleClick}) {

    return (<div className="flipmain">
        <div className="topur">
            <Back msg="Exit" />
            <p>Flip The Image</p>
            <svg viewBox="0 0 24 24" fill="none" >
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffffff" strokeWidth="1.5"></circle>
                <path d="M12 17V11" stroke="#dadadaff" strokeWidth="1.5" strokeLinecap="round"></path>
                <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#d5d5d5ff"></circle>
            </svg>
        </div>
        <div className="bdyflip">
            <p onClick={()=>handleClick(1)}>Easy</p>
            <p onClick={()=>handleClick(2)}>Medium</p>
            <p onClick={()=>handleClick(3)}>Hard</p>
        </div>
    </div >);
}
