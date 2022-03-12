import React from 'react'
import { useLocation } from 'react-router-dom'
import profileImage from '../images/test_profile.jpg'

const Profile = () => {
    const location = useLocation()
    return (
        (location.pathname !== '/login' && location.pathname !== '/signup') &&
        <>
            <section className="profile__main">
                <div className="profile__container">
                    <div className="profile__image">
                        <img src={profileImage} alt="WasteAid User profile" />
                    </div>
                    <p className="profile__name">John Doe</p>
                </div>
            </section>
        </>
    )
}

export default Profile