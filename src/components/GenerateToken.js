import React, { useContext, useRef, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useNavigate, useParams } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import QRCode from 'qrcode'

const GenerateToken = ({ transform, handleToggle, fetchTokensFunc }) => {
    const { postid } = useParams()

    const context = useContext(PostContext)
    const { generateTokenFunc, fetchOnePost, onePost } = context
    const nevigate = useNavigate()

    const ref = useRef(0)
    const qrLink = useRef(0)

    const [imgURL, setImgURL] = useState('')
    const [generated, setGenerated] = useState(false)
    const [input, setInput] = useState({ amount: '' })
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetchOnePost(postid)
        const resposne = await generateTokenFunc(onePost[0].am_id, input.amount, onePost[0]._id)

        if (resposne.ok) {
            const token = await resposne.json()
            const URL = await QRCode.toDataURL(token.token._id)
            setImgURL(URL)
            qrLink.current.click()
            setGenerated(true)
        }
    }
    const handleClose = () => {
        if (generated) {
            handleToggle()
            nevigate('/')
        } else {
            handleToggle()
        }
    }

    return (
        <>
            <div style={{ transform: transform }} className="addpost__background">
                <div style={{ transform: 'translateX(-50%) ' + transform }} className="addpost__container">
                    <form className='addpost_form' action='post' onSubmit={handleSubmit}>
                        <Scrollbars style={{ maxWidth: '100%', height: '98vh' }}>
                            <h1 className='head__text txt__center'>Generate Token</h1>

                            <div className="form__group">
                                <input type="number" className="amount" name="amount" value={input.amount} onChange={onChange} min="100" required />
                                <label htmlFor="am_name">The Amount(in grams)</label>
                            </div>
                            <button className='block my-1-5 btn btn-primary' id="submit" type='submiit' >Generate</button>
                            {
                                imgURL && (
                                    <>
                                        <img src={imgURL} alt="QRcode from Generate Token" />
                                        <a href={imgURL} ref={qrLink} download>Download Again?</a>
                                        <p>Great! Now Screenshot or Download this QR code and attach it with the parcel you are sending in your collected waste.</p>
                                        <p className='last_p'>The Receiver will scan this QR code from their side and you will be notified.</p>
                                    </>
                                )
                            }
                        </Scrollbars>
                    </form>
                    <div className="flx form__btns">
                        <button ref={ref} className='cancel-btn block btn my-1-5' onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerateToken
