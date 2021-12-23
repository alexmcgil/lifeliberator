import React from "react"
import s from "./Header.module.sass"
import logo from "./logo.png"
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.header}>
        <div className={s.header__img}>
            <NavLink to={"/"}> <img src={logo} alt={"logo"}/></NavLink>
        </div>
        <button>SIGN IN</button>
    </header>
}

export default Header