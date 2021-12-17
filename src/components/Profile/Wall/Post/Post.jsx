import React from "react"
import s from "./Post.module.sass"

const Post = () => {
    return <div className={s.wall__post}>
        <div className={s.wall__post_head}>
            <img
                src="https://prod.cloud.rockstargames.com/global/LifeInvader/images/avatars/32x32/drray.jpeg"
                alt=""/>
            <h3>Dr. Ray De Angelo Harris</h3>
            <span>posted a status update</span>
        </div>
        <div className={s.wall__post_body}>Some fool on the street is sweatin my Chakra. He about to learn
            the Chakra Attack.
        </div>
    </div>
}

export default Post

//I move in and out like some kind of Navy Seal. But I ain’t stealing your
//             ship. I ain’t a Somali pirate. I am Dr. Ray De Angelo Harris, and I am a tug boat captain,
//             about to push your big dumb heavy ass into port so you can get firmly grounded. You dig this
//             nautical trip? We tying knots in here. That’s deep right there.