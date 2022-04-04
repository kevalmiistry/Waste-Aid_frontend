import React, { useState } from 'react'
import AddPost from './AddPost'

const AidMan = () => {
    document.title = 'Aid-man'
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
    return (
        <>
            <section className="center__component aidman__main">
                <button className='btn btn-primary-clr btn-center my-2' onClick={handleToggle} >Add New Post</button>
                {<AddPost transform={transform} handleToggle={handleToggle} />}

            </section>
        </>
    )
}

export default AidMan
