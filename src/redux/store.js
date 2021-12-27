import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


let store = {
    _callSubscriber() {
    },
    _state: {
        "profilePage": {
            "postsData": [
                {
                    "id": 1,
                    "name": "Dr. Ray De Angelo Harris",
                    "type": "posted a status update",
                    "img": "https://prod.cloud.rockstargames.com/global/LifeInvader/images/avatars/32x32/drray.jpeg",
                    "text": "Some fool on the street is sweatin my Chakra. He about to learn the Chakra Attack.",
                    "likesCount": 302
                },
                {
                    "id": 2,
                    "name": "Dr. Ray De Angelo Harris",
                    "type": "posted a status update",
                    "img": "https://prod.cloud.rockstargames.com/global/LifeInvader/images/avatars/32x32/drray.jpeg",
                    "text": "I move in and out like some kind of Navy Seal. But I ain’t stealing your ship. I ain’t a Somali pirate. I am Dr. Ray De Angelo Harris, and I am a tug boat captain, about to push your big dumb heavy ass into port so you can get firmly grounded. You dig this nautical trip? We tying knots in here. That’s deep right there.",
                    "likesCount": 1337
                }
            ],
            "newPostText": ""
        },
        "messagesPage": {
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
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}



export default store