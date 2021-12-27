const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    "dialogData": [
        {
            "id": 1,
            "name": "Billy"
        },
        {
            "id": 3,
            "name": "Vera"
        },
        {
            "id": 2,
            "name": "Sasha"
        },
        {
            "id": 302,
            "name": "Alex"
        }
    ],
    "messagesData": [
        {
            "id": 1,
            "message": "Hi"
        },
        {
            "id": 2,
            "message": "Ignor"
        },
        {
            "id": 3,
            "message": "Hm"
        }
    ],
    newMessageText: ""
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case NEW_MESSAGE:
            let newMessage = {
                "id": 4,
                "message": state.newMessageText
            }

            state.messagesData.push(newMessage)
            state.newMessageText = ""
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state

        default:
            return state
    }
}

export const newMessageActionCreator = () => ({type: NEW_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default messagesReducer