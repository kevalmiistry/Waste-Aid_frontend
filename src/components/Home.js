import React, { useContext, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { useNavigate } from 'react-router-dom';
import PostContext from '../Context/Posts/PostContext';
import Post from './Post';

const Home = () => {
    document.title = 'Home'
    const { posts, fetchAllPosts } = useContext(PostContext)

    let nevigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchAllPosts()
        } else {
            nevigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <section className="center__component">
                <Scrollbars style={{ maxWidth: '50rem', height: '90vh' }}>
                    <div className="post__container">
                        {posts.length === 0 && <div className='mx-3'>No Posts to Display</div>}
                        {
                            posts.map((post) => {
                                return <Post key={post._id} content={post} />
                            })
                        }
                    </div>
                </Scrollbars>
            </section>
        </>
    )
}

export default Home