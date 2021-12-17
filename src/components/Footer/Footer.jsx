import React from "react"
import s from "./Footer.module.sass"

const Footer = () => {
    return <footer className={s.footer}>
        <hr/>
        <p className={s.footer__copyright}>© AlexMcGil 2021</p>
        <a className={s.footer__privacy} href="#privacy">Privacy Policy</a>
        <a className={s.footer__legal} href="#legal">Legal</a>
    </footer>
}

export default Footer