import "../cssFile/showMsg.css";

export default function ShowMsg({ showit, goo }) {


    const handleInnerClick = (e) => {
        e.stopPropagation();
    };

    const handleBtnClick = (e) => {
        e.stopPropagation();
        if (typeof goo === "function") goo();
    };

    return (
        <>
            {showit.msg && (
                <div onClick={handleBtnClick} className="showmsg">
                    <div onClick={handleInnerClick}>
                        <p>
                            {showit.msg}
                            {showit.msg2 && (
                                <>
                                    <br />
                                    <span>{showit.msg2}</span>
                                </>
                            )}
                        </p>

                        <div className="msgbtn" onClick={handleBtnClick}>
                            {showit.btn}
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}
