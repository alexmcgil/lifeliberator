import React from "react"
import s from "./Profile.module.sass"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WallContainer from "./Wall/WallContainer";


const Profile = (props) => {
    return <main className={s.content}>
        <ProfileInfo />
        <hr/>
        <WallContainer store={props.store} />
    </main>
}

export default Profile