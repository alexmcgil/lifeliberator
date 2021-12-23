import React from "react"
import s from "./Profile.module.sass"
import Wall from "./Wall/Wall"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <main className={s.content}>
        <ProfileInfo />
        <hr/>
        <Wall profilePage={props.state.profilePage} dispatch={props.dispatch}/>
    </main>
}

export default Profile