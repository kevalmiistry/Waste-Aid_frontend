import { createContext, useState } from "react"

const PostContext = createContext()

export const PostProvider = (props) => {
    const AUTH_STORAGE_KEY = 'Waste_Aid_authtoken'

    const [posts, setPosts] = useState([])
    const [onePost, setOnePost] = useState([])
    const [fullPostID, setFullPostID] = useState(null)

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

    // Logout
    const LogOutFunc = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY)

    }

    return (
        <PostContext.Provider value={{ onePost, fetchOnePost, AddPostFunc, signUpFunc, logInFunc, fetchAllPosts, posts, fullPostID, setFullPostID, LogOutFunc }} >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext
