
import "../../cssFile/flip-css/flipmain.css";
import Back from "../goback"
import { useState } from "react";
import Flipmain from "./flipmain";
import Flipgame from "./flipGame";
import Showmsg from '../showMsg';


export default function flipmain() {
    const [lvl, setLvl] = useState(0);
    const [prt, setPrt] = useState({ page: 1 });
    const [showit, setShowit] = useState({
        is: false,
        msg: "",
        msg2: "",
        btn: ""
    });

    const handleClick = (a) => {
        setLvl(a);
        setPrt((pre) => ({ ...pre, page: 2 }));
    };

    return (<>
        {showit.is && (
            <Showmsg
                showit={showit}
                goo={() => setShowit({ is: false, msg: "", msg2: "", btn: "" })}
            />
        )}
        {
            (prt.page == 1) ?
                <Flipmain handleClick={handleClick} lvl={lvl} />
                :
                <Flipgame setShowit={setShowit} lvl={lvl} setPrt={setPrt} />
        }</>);
}
