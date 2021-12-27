import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import Wall from "./Wall";


const WallContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() )
    }

    let onPostChange = (text) => {
         props.store.dispatch( updateNewPostTextActionCreator(text) )
    }

    return <Wall
        updateNewPostText={onPostChange}
        addPost={ addPost }
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}/>

}

export default WallContainer