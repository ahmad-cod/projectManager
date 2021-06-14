import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card notifications">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul>
                        { notifications && notifications.map(notification => {
                            return ( <li key={notification.id}>
                                <span className="pink-text">{notification.user} </span>
                                <span className="">{notification.content}</span>
                                <p>{ notification.time && moment(notification.time.toDate()).fromNow()}</p>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications