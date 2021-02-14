import React from "react";
import { slide as HamMenu} from "react-burger-menu";

const SideBar = ({...props}) =>{
    return(
        <HamMenu {...props}>
            <a className="menu-item" href="/">
                Anasyafa
            </a>
            <a className="menu-item" href="/">
                Anasyafa
            </a>
            <a className="menu-item" href="/">
                Anasyafa
            </a>
            <a className="menu-item" href="/">
                Anasyafa
            </a>
            <a className="menu-item" href="/">
                Anasyafa
            </a>
        </HamMenu>
    );
}
export default SideBar;