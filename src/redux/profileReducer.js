const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                name: "Somebody",
                type: "looling",
                img: "https://prod.cloud.rockstargames.com/global/LifeInvader/images/avatars/32x32/drray.jpeg",
                text: state.newPostText,
                likesCount: 0
            }

            state.postsData.push(newPost)
            state.newPostText = ""
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer