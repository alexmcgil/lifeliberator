import React from "react"
import s from "./Wall.module.sass"
import Post from "./Post/Post"

const Wall = (props) => {

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return <div className={s.wall}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={onAddPost}>Say it!</button>
        {props.posts.map(item => <Post name={item.name} type={item.type} img={item.img} text={item.text} likes={item.likesCount} key={item.id}/>)}
    </div>

}

export default Wall