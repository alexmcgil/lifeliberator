import React from "react"
import s from "./Messages.module.sass"
import {NavLink} from "react-router-dom";

const Messages = () => {
    return <main className={s.dialogs}>
        <div className={s.dialogItems}>
            <div className={s.dialog}>
                <NavLink to="/messages/1">Billy</NavLink>
            </div>
            <div className={s.dialog + " " + s.active}>
                <NavLink to="/messages/3">Vera</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/messages/2">Sasha</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>Pidor</div>
            <div className={s.message}>!</div>
        </div>

    </main>
}

export default Messages