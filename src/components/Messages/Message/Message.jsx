import React from "react"
import s from "./../Messages.module.sass"


const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

export default Message