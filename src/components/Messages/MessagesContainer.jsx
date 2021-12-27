import React from "react"
import {newMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch( newMessageActionCreator() )
    }

    let onMessageChange = (text) => {
        props.store.dispatch( updateNewMessageTextActionCreator(text) )
    }
    return <Messages
        dialogData={state.messagesPage.dialogData}
        messagesData={state.messagesPage.messagesData}
        newMessage={sendMessage}
        onInput={onMessageChange}
        newMessageText={state.messagesPage.newMessageText}
    />
}

export default MessagesContainer