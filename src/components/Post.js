import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Post = () => {

    const url1 = "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80"
    const url2 = "https://images.unsplash.com/photo-1644895986468-ddcc385751a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    const url3 = "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    const url4 = "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

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
                        <div>
                            <img alt="" src={url1} />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img alt="" src={url2} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img alt="" src={url3} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img alt="" src={url4} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img alt="" src={url1} />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img alt="" src={url2} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img alt="" src={url3} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img alt="" src={url4} />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <h3 className='post__title'>Title which is needed</h3>
                <p className='post__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, repellat placeat labore molestias sequi facere sint necessitatibus aperiam accusantium. Dignissimos.</p>
                <div className="post__mid__section flx flx-between flx-al-center">
                    <i className="fas fa-square-check"></i>
                    <p className="post__amount">10000 grams collected</p>
                    <div className='flx flx-al-center'>
                        <p className="post__usercount">10</p><i className="fas fa-users"></i>
                    </div>
                </div>
                <div className="flx flx-between flx-al-center">
                    <div>
                        <i className="far fa-calendar"></i><small className="post__date">21-feb-2022</small>
                    </div>
                    <div className="flx flx-al-center">
                        <p className="post__expand mx-1">Know More  <i className="fas fa-angle-right"></i></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
