import React from "react"
import s from "./Header.module.sass"
import logo from "./logo.png"

const Header = () => {
    return <header className={s.header}>
        <div className={s.header__img}>
            <img src={logo} alt={"logo"}/>
        </div>
        <button>SIGN IN</button>
    </header>
}

export default Header