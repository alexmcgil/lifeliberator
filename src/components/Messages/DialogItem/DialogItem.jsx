import React from "react"
import s from "./../Messages.module.sass"
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {

    let path = "/messages/" + props.id

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem