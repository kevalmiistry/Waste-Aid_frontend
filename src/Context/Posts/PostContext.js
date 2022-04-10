import { createContext, useState } from "react"

const PostContext = createContext()

export const PostProvider = (props) => {
    const AUTH_STORAGE_KEY = 'Waste_Aid_authtoken'

    const [posts, setPosts] = useState([])
    const [onePost, setOnePost] = useState([])
    const [amPost, setAmPost] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [fullPostID, setFullPostID] = useState(null)
    const [tokens, setTokens] = useState([])

    // Add Post
    const AddPostFunc = async (formData) => {
        const response = await fetch('http://localhost:5000/api/post/addpost', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            },
            body: formData
        })

        return response
    }

    // Fetch One Post
    const fetchOnePost = async (id) => {
        const response = await fetch('http://localhost:5000/api/post/fetchonepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            },
            body: JSON.stringify({ id })
        })
        const thePosts = await response.json()
        setOnePost(thePosts)
    }

    // Fetch Aid-man's Post
    const fetchAMPost = async (id) => {
        const response = await fetch('http://localhost:5000/api/post/fetchampost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            }
        })
        const thePosts = await response.json()
        setAmPost(thePosts)
    }

    // Fetch All Posts
    const fetchAllPosts = async () => {
        const response = await fetch('http://localhost:5000/api/post/fetchposts', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            }
        })
        const thePosts = await response.json()
        setPosts(thePosts)
    }

    // SignUp
    const signUpFunc = async (fname, lname, email, password, cpassword) => {

        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fname, lname, email, password, cpassword })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem(AUTH_STORAGE_KEY, json.authToken)
        }
        return response
    }

    // Login
    const logInFunc = async (email, password) => {

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem(AUTH_STORAGE_KEY, json.authToken)
        }
        return response
    }

    // Fetch user info http://localhost:5000/api/auth/getuser
    const fetchUserInfo = async () => {
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            }
        })
        const res = await response.json()
        setUserInfo(res)
    }

    // Logout
    const LogOutFunc = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY)

    }

    // Genrate Token
    const generateTokenFunc = async (am_id, amount, post_id) => {

        const response = await fetch('http://localhost:5000/api/token/gen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            },
            body: JSON.stringify({ am_id, amount, post_id })
        })
        return response
    }

    // fetch Tokens
    const fetchTokensFunc = async () => {
        const response = await fetch('http://localhost:5000/api/token/fetch', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            }
        })
        const t = await response.json()
        setTokens(t)
    }

    return (
        <PostContext.Provider value={{ tokens, fetchTokensFunc, generateTokenFunc, userInfo, fetchUserInfo, amPost, fetchAMPost, onePost, fetchOnePost, AddPostFunc, signUpFunc, logInFunc, fetchAllPosts, posts, fullPostID, setFullPostID, LogOutFunc }} >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext
