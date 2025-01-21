import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import {MessagePropsType} from "../message/Message";

type FriendMessagePropsType = {
    message: MessageType;
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = ({message}: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img className={s.img}
                    id={'hw1-friend-avatar-' + message.id}
                    // создаёт студент

                    //

                    src={message.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    > {message.user.name}
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {message.message.text}
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {message.message.time}
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
