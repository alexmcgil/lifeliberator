import React from "react"
import s from "./Messages.module.sass"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Messages = (props) => {

    let newMessage = React.createRef()

    let sendMessage = () => {
        let text = newMessage.current.value
        console.log(text)
    }

    return <main className={s.dialogs}>
        <div className={s.dialogsItems}>

            {props.store.dialogData.map(item => <DialogItem name={item.name} id={item.id} key={item.id}/>)}

        </div>
        <div className={s.messages}>
            {props.store.messagesData.map(item => <Message message={item.message} key={item.id}/>)}
            <div className="input">
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>

    </main>
}

export default Messages