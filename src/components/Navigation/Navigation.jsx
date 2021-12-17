import React from "react"
import "./Navigation.sass"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    // TODO Сделать проигрыаение звука при наведении на элемент
    // let audio = document.querySelector("audio")
    // document.querySelector("a").addEventListener("mouseenter", () => {audio.play()})
    return <nav className="nav">
        <h2 className="nav__main">navigation</h2>
        <div>
            <NavLink to="/profile" >Me</NavLink>
        </div>
        <div>
            <NavLink to="/music" >Music</NavLink>
        </div>
        <div>
            <NavLink to="/messages" >Messages</NavLink>
        </div>
        <div className="nav__settings">
            <NavLink to="/settings" >Settings</NavLink>
        </div>
        {/*<audio>*/}
        {/*    <source src="/src/components/Navigation/menu.mp3"/>*/}
        {/*</audio>*/}
    </nav>
}

export default Navigation