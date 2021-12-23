import React from "react"
import s from "./Wall.module.sass"
import Post from "./Post/Post"


const Wall = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch( { type: "ADD-POST" } )
        newPostElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( { type: "UPDATE-NEW-POST-TEXT", text: text } )
    }

    console.log(props)
    return <div className={s.wall}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Say it!</button>
        {props.profilePage.postsData.map(item => <Post name={item.name} type={item.type} img={item.img} text={item.text} likes={item.likesCount} key={item.id}/>)}
    </div>

}

export default Wall