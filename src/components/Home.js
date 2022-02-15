import React from 'react'

import { Scrollbars } from 'react-custom-scrollbars';
import Post from './Post';

const Home = () => {
    return (
        <>
            <section className="center__component">
                <Scrollbars style={{ maxWidth: '50rem', height: '90vh' }}>
                    <div className="post__container">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </Scrollbars>
            </section>
        </>
    )
}

export default Home