import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Scrollbars } from 'react-custom-scrollbars'
import PostContext from '../Context/Posts/PostContext'
import { useNavigate, useParams } from 'react-router-dom'
import GenerateToken from './GenerateToken'
import moment from 'moment'

const FullPost = () => {
    document.title = 'Post'
    const { onePost, fetchOnePost, fetchUserInfo, userInfo } = useContext(PostContext)

    let nevigate = useNavigate()

    const [showAddPost, setShowAddPost] = useState(false)
    const [transform, setTransform] = useState('')

    const handleToggle = () => {
        if (showAddPost) {
            setTransform('scale(0)')
            setShowAddPost(false)
        } else {
            setTransform('scale(1)')
            setShowAddPost(true)
        }
    }

    const { id } = useParams()
    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchOnePost(id)
            fetchUserInfo()
        } else {
            nevigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <GenerateToken transform={transform} handleToggle={handleToggle} userInf={userInfo} />
            {
                onePost.map((post) => {
                    const { _id, title, description, address, amount_collected, user_count, images, date } = post

                    return (
                        <section className="center__component" key={_id}>
                            <Scrollbars style={{ maxWidth: '50rem', height: '90vh', zIndex: '0' }}>
                                <div className="post__container"></div>
                                <div className="post__main">
                                    <div className="image__slider">
                                        <Carousel
                                            showStatus={false}
                                            showThumbs={false}
                                            width={'100%'}
                                            dynamicHeight={false} >
                                            {
                                                Object.entries(images).map(item => {
                                                    return (
                                                        <div key={item[1].url}>
                                                            <img alt="Waste-Aid Post's Photos" src={item[1].url} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </div>
                                    <h3 className='post__title'>{title}</h3>
                                    <p className='post__description'>{description}</p>
                                    <div className="post__mid__section ">
                                        <p className="post__amount mx-1x">{amount_collected} grams have collected</p>
                                        <div className='flx flx-al-center my-1'>
                                            <i className="fas fa-users"></i><p className="post__usercount mx-1x"> {user_count} users have contributed</p>
                                        </div>
                                    </div>
                                    <div className="flx flx-between flx-al-center">
                                        <div>
                                            <i className="far fa-calendar"></i><small className="post__date">{moment(date).format('DD-MMM-YYYY')}</small>
                                        </div>
                                    </div>
                                    <p className='address__title'>Address of Aid-man</p>
                                    <p className="post__address">
                                        {address}
                                    </p>
                                    <p className="instruct__text"><span className="red">*</span>If you are planing to send your collected waste then consider generating Token and follow some extra procedure</p>
                                    <p className="instruct__text"><span className="red">*</span>You will also get acknowledgement for your sent waste by doing these </p>
                                    <div className='flx flx-end'>
                                        <button className='btn btn-primary post__generate' onClick={handleToggle}>Generate Token</button>
                                    </div>
                                </div>
                            </Scrollbars>
                        </section>
                    )

                })


            }
        </>
    )
}

export default FullPost