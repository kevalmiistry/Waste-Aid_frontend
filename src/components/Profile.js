import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import profileImage from '../images/test_profile.jpg'
import Token from './Token'

const Profile = () => {
    const context = useContext(PostContext)
    const { userInfo, fetchUserInfo, fetchTokensFunc, tokens, LogOutFunc } = context
    const nevigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState('CLOSED')

    const showProfile = () => {
        if (mobileMenu === 'CLOSED') {
            document.querySelector('.profile__main').style.transform = 'translateY(0%)'
            setMobileMenu('OPENED')
        } else if (mobileMenu === 'OPENED') {
            document.querySelector('.profile__main').style.transform = 'translateY(-100%)'
            setMobileMenu('CLOSED')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchUserInfo()
            fetchTokensFunc()
        } else {
            nevigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const LogOut = () => {
        LogOutFunc()
        nevigate('./login')
    }

    return (
        (localStorage.getItem('Waste_Aid_authtoken')) &&
        <>
            <img onClick={showProfile} className="profile_img_mobile" src={profileImage} alt="WasteAid User profile" />

            <section className="profile__main">
                <div onClick={showProfile} className="close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='#fff' d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                </div>
                <div className="profile__container">
                    <div className="profile__image">
                        <img src={profileImage} alt="WasteAid User profile" />
                        <p className="profile__name">{userInfo && userInfo.fname + ' ' + userInfo.lname}</p>
                    </div>
                </div>
                {
                    (tokens.length === 0) ?
                        (<p className='txt__center'>No tokens to be showed</p>) :
                        (<p className='txt__center'>Your Tokens status</p>)
                }
                <div className="tokens__main">
                    <Scrollbars style={{ 'zIndex': '0' }}>
                        {
                            tokens.map((token) => {
                                return <Token key={token._id} token={token} />
                            })
                        }
                    </Scrollbars>
                </div>
                <div className="logout__btn">
                    <button className='btn btn-primary' onClick={LogOut}>Logout</button>
                </div>
            </section>
        </>
    )
}

export default Profile