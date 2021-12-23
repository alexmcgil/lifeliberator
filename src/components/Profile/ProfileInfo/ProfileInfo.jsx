import React from "react"
import s from "./ProfileInfo.module.sass"


const ProfileInfo = () => {

    return <div>
        <div className={s.profile}>
            <div className={s.profile__photo}>
                <img alt={"profile"} className={s.profile__photo_img}
                     src="https://prod.cloud.rockstargames.com/global/LifeInvader/images/avatars/172x172/drray.jpeg"/>
            </div>
            <div className={s.profile__info}>
                <h1>Dr. Ray De Angelo Harris</h1>
                <button className={s.profile__button}>+ stalk</button>
                <p className={s.profile__status}>
                    WCTR Broadcasting<br/>
                    Right on the fault line <span className={s.profile__likes}>470688 Stalkers</span>
                </p>
                <div className={s.profile__photos}>
                    <img
                        src="https://prod.cloud.rockstargames.com/global/LifeInvader/images/ThumbInfo/drray/1.png"
                        alt="Photos" width="132" height="74"/>
                    <br/>
                    <span className={s.profile__photos_description}>Photos</span>
                    <span id="photoCount"></span>
                </div>
            </div>
        </div>
        <hr/>
        <div className={s.information}>
            <h2 className={s.information__title}>Basic information</h2>
            <p className={s.info__text}>
                Birthday: November 10th <br/>
                Relationship Status: At one with the universe, but also at two with it as well<br/>
                Sex: Musky<br/>
                Interested in: Apocalyptic yoga, deep spiritual cayenne pepper and sea salt colonic cleansin,
                Radio broadcasting, spiritual enlightenment, Ommmming. Incense that you sprinkle on hot coals,
                religious symbols that sooth the ladies, turning the sticky mess of your mind inside out like
                you done prolapsed your soul. That’s cleansin. That’s health. That’s real shit. That’s part of
                my book “When One Becomes Two.” Ommmmmmm.<br/>
                Religious Views: - I’m focused, that’s my view.<br/>
                Political Views: - Don’t try and hustle a hustler, or you gonna get it. Ommmmmm.<br/>
                About:<br/>
                to blow your mind. And about to fire my producer for being a terrible ass hippie. You got to
                open your mind. Close your heart. Peak through the blinds of your soul. Raise the curtains on
                your chakra. Shine a light on it. Get a microscope and burn some ants. Those ants represent your
                eyes. They go in two different directions. I’m about keeping you focused by doing this:
                Ommmmmmm.<br/>
            </p>
        </div>
    </div>
}

export default ProfileInfo