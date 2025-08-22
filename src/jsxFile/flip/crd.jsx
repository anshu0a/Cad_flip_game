
import "../../cssFile/flip-css/crd.css";
import { useState } from "react";



export default function crd({ link , onClick , className }) {


    return (
        <div className={className} onClick={onClick}>
            <div className="imgdiv crdf">
                <img src={link}></img>
            </div>
            <img className="imgdiv crdb" src="https://res.cloudinary.com/dwqigzdpw/image/upload/v1754896746/wallpaperflare.com_wallpaper_4_rvzf2y.jpg"></img>

        </div>
    );
}
