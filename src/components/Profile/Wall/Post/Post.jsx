import React from "react"
import s from "./Post.module.sass"

const Post = (props) => {
    return <div className={s.wall__post}>
        <div className={s.wall__post_head}>
            <img
                src={props.img}
                alt=""/>
            <h3>{props.name}</h3>
            <span>{props.type}</span>
        </div>
        <div className={s.wall__post_body}>{props.text}</div>
        <div className="likes">{props.likes}</div>
    </div>
}

export default Post

