import React from "react"
import s from "./Messages.module.sass"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Messages = (props) => {

    let sendMessage = () => {
        props.newMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.onInput(text)
    }

    let dialogs = props.dialogData.map(item => <DialogItem name={item.name} id={item.id} key={item.id}/>)
    let messages = props.messagesData.map(item => <Message message={item.message} key={item.id}/>)

    return <main className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogs }
        </div>
        <div className={s.messages}>
            { messages }
            <div className="input">
                <textarea onChange={onMessageChange} value={props.newMessageText} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>

    </main>
}

export default Messages