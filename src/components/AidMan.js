import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import AddPost from './AddPost'
import Post from './Post'

const AidMan = () => {
    document.title = 'Aid-man'

    const { amPost, fetchAMPost } = useContext(PostContext)
    let nevigate = useNavigate()

    const [showAddPost, setShowAddPost] = useState(false)
    const [transform, setTransform] = useState('')

    const handleToggle = () => {
        if (showAddPost) {
            setTransform('translateY(-100%)')
            setShowAddPost(false)
        } else {
            setTransform('translateY(0%)')
            setShowAddPost(true)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchAMPost()
        } else {
            nevigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <section className="center__component aidman__main">
                <button className='btn btn-primary-clr btn-center my-2' onClick={handleToggle} >Add New Post</button>
                {<AddPost transform={transform} handleToggle={handleToggle} />}
                <h2 style={{ marginTop: '3rem' }} >Your Posts:</h2>
                <Scrollbars style={{ maxWidth: '50rem', height: '90vh' }}>
                    <div style={{ marginBottom: '8rem' }} className="post__container">
                        {amPost.length === 0 && <div className='mx-3'>No Posts to Display</div>}
                        {
                            amPost.map((post) => {
                                return <Post key={post._id} content={post} />
                            })
                        }
                    </div>
                </Scrollbars>
            </section>
        </>
    )
}

export default AidMan
