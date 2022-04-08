import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import profileImage from '../images/test_profile.jpg'

const Profile = () => {
    const context = useContext(PostContext)
    const { userInfo, fetchUserInfo } = context
    const nevigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchUserInfo()
        } else {
            nevigate('/login')
        }
        // eslint-disable-next-line
    }, [])
    return (
        (localStorage.getItem('Waste_Aid_authtoken')) &&
        <>
            <section className="profile__main">
                <div className="profile__container">
                    <div className="profile__image">
                        <img src={profileImage} alt="WasteAid User profile" />
                    </div>
                    <p className="profile__name">{userInfo && userInfo.fname + ' ' + userInfo.lname}</p>
                </div>
            </section>
        </>
    )
}

export default Profile