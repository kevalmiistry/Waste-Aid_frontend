import React, { } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

const Post = (props) => {

    const { _id, title, description, amount_collected, user_count, date, images } = props.content

    return (
        <>
            <div className="post__main">
                <div className="image__slider">
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        width={'100%'}
                        dynamicHeight={false}
                    >
                        {
                            Object.entries(images).map(item => {
                                if (item[1].url !== null) {
                                    return (
                                        <div key={item[1].url}>
                                            <img alt="" src={item[1].url} />
                                        </div>
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                    </Carousel>
                </div>

                <h3 className='post__title'>{title}</h3>
                <p className='post__description'>{description}</p>
                <div className="post__mid__section flx flx-between flx-al-center">
                    <p className="post__amount">{amount_collected} Grams Collected</p>

                    <div className='flx flx-al-center'>
                        <p className="post__usercount">{user_count}</p><i className="fas fa-users"></i>
                    </div>
                </div>
                <div className="flx flx-between flx-al-center">
                    <div>
                        <i className="far fa-calendar"></i><small className="post__date">{date}</small>
                    </div>
                    <div className="flx flx-al-center">
                        <Link style={{ textDecoration: 'none' }} to={`/post/${_id}`} ><p className="post__expand mx-1">Know More<i className="fas fa-angle-right"></i></p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
