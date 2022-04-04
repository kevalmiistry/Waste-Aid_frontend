import React, { useState, useRef, useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import Loader from './Loader'


const AddPost = ({ handleToggle, transform }) => {

    const context = useContext(PostContext)
    const { AddPostFunc } = context

    let nevigate = useNavigate()
    let ref = useRef(null)

    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState({ am_name: '', title: '', description: '', address: '', target: 0, contact_number: '' })
    const [img, setImg] = useState({ image1: null, image2: null, image3: null, image4: null, image5: null, image6: null, image7: null, image8: null, image9: null, image10: null })
    const [targetToggle, setTargetToggle] = useState('none')

    const onChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const onFileChange = (e) => {
        setImg({ ...img, [e.target.name]: e.target.files[0] })
    }

    const handleClick = async (e) => {

        const formData = new FormData()
        for (const property in text) {
            formData.append(`${property}`, text[property])
        }

        for (const property in img) {
            formData.append(`${property}`, img[property])
        }

        setIsLoading(true)

        const response = await AddPostFunc(formData)

        setIsLoading(false)

        if (response.ok) {
            ref.current.click()
            setText({ am_name: '', title: '', description: '', address: '', target: 0, contact_number: '' })
            nevigate('/aidman')
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <div style={{ transform: transform }} className="addpost__background">
                <div style={{ transform: 'translateX(-50%) ' + transform }} className="addpost__container">
                    <form className='addpost_form' action='post'>
                        <Scrollbars style={{ maxWidth: '100%', height: '98vh' }}>
                            <h1 className='head__text txt__center'>Add Post</h1>

                            <div className="form__group">
                                <input type="text" className="am_name" name="am_name" value={text.am_name} onChange={onChange} required />
                                <label htmlFor="am_name">Aid-man name to show</label>
                            </div>

                            <div className="form__group">
                                <input type="text" className="title" name="title" value={text.title} onChange={onChange} required />
                                <label htmlFor="title">Post Title</label>
                            </div>

                            <div className="form__group">
                                <textarea className="description" name="description" value={text.description} onChange={onChange} required />
                                <label htmlFor="description">Description</label>
                            </div>

                            <div className="form__group">
                                <textarea className="address" name="address" value={text.address} onChange={onChange} required />
                                <label htmlFor="address">Address</label>
                            </div>

                            <label htmlFor="target">Do you have any target for waste collection?</label>
                            <div className='flx'>
                                <span>Yes</span><input type="radio" name="istarget" value={'yes'} onChange={() => setTargetToggle('block')} />
                                <span>No</span><input type="radio" name="istarget" value={'no'} onChange={() => setTargetToggle('none')} />
                            </div>

                            <div style={{ display: targetToggle }} className="form__group">
                                <input type="number" className="target" name="target" value={text.target} onChange={onChange} required />
                                <label htmlFor="target">Target (in grams)</label>
                            </div>

                            <div className="form__group">
                                <input type="number" className="contact_number" name="contact_number" value={text.contact_number} onChange={onChange} required />
                                <label htmlFor="contact_number">Contact Number</label>
                            </div>

                            <label htmlFor="image1">Image 1</label>
                            <input type="file" name="image1" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image2">Image 2</label>
                            <input type="file" name="image2" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image3">Image 3</label>
                            <input type="file" name="image3" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image4">Image 4</label>
                            <input type="file" name="image4" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image5">Image 5</label>
                            <input type="file" name="image5" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image6">Image 6</label>
                            <input type="file" name="image6" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image7">Image 7</label>
                            <input type="file" name="image7" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image8">Image 8</label>
                            <input type="file" name="image8" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image9">Image 9</label>
                            <input type="file" name="image9" accept='image/*' onChange={onFileChange} />

                            <label htmlFor="image10">Image 10</label>
                            <input type="file" name="image10" accept='image/*' onChange={onFileChange} />


                        </Scrollbars>
                    </form>
                    <div className="flx form__btns">
                        <button ref={ref} className='cancel-btn block btn my-1-5' onClick={handleToggle}>Cancel</button>
                        <button className='block my-1-5 btn btn-primary' id="submit" onClick={handleClick}>Submit Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPost
