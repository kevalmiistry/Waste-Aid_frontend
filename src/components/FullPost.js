import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Scrollbars } from 'react-custom-scrollbars'

const FullPost = () => {
    document.title = 'Post'
    const url1 = "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80"
    const url2 = "https://images.unsplash.com/photo-1644895986468-ddcc385751a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    const url3 = "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    const url4 = "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    return (
        <>
            <section className="center__component">
                <Scrollbars style={{ maxWidth: '50rem', height: '90vh' }}>
                    <div className="post__container"></div>
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
                        <div className="post__mid__section ">
                            <p className="post__amount">10000 grams have collected</p>
                            <div className='flx flx-al-center my-1'>
                                <i className="fas fa-users"></i><p className="post__usercount"> 10 users have contributed</p>
                            </div>
                        </div>
                        <div className="flx flx-between flx-al-center">
                            <div>
                                <i className="far fa-calendar"></i><small className="post__date">21-feb-2022</small>
                            </div>
                        </div>
                        <p className='address__title'>Address of Aid-man</p>
                        <p className="post__address">
                            131, desai steet - vav
                            ta. kamrej di. surat
                            pin: 12345
                        </p>
                        <p className="instruct__text"><span className="red">*</span>If you are planing to send your collected waste then consider generating Token and follow some extra procedure</p>
                        <p className="instruct__text"><span className="red">*</span>You will also get acknowledgement for your sent waste by doing these </p>
                        <div className='flx flx-end'>
                            <button className='btn btn-primary post__generate'>Generate Token</button>
                        </div>
                    </div>
                    {/* </div> */}
                </Scrollbars>
            </section>
        </>
    )
}

export default FullPost