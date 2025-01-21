import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";


// нужно создать правильный тип вместо any
// export type MessagePropsType = MessageType;

export type MessagePropsType = {
    message: MessageType; // Измените тип пропса на MessageType
};







// нужно отобразить приходящие данные
const Message = ({ message }: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img className={s.imgMain}
                    id={'hw1-avatar-' + message.id}
                    // создаёт студент

                    //
                    src={message.user.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {message.user.name}


                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
