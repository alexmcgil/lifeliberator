import React from "react"
import s from "./Wall.module.sass"
import Post from "./Post/Post"

const Wall = () => {
    return <div className={s.wall}>
        <textarea></textarea>
        <Post />
        <Post />
        <Post />
    </div>

}

export default Wall