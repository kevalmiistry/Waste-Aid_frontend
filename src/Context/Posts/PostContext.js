import { createContext } from "react"

const PostContext = createContext()

export const PostProvider = (props) => {

    // Add Post
    const AddPostFunc = async (formData) => {
        const response = await fetch('http://localhost:5000/api/post/addpost', {
            method: 'POST',
            headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxZTRmNjk0NmIzMDQ2ZTEzNWNhZWVlIn0sImlhdCI6MTY0NjU4NDcxNn0.VXz-xGux6sFmsg8QIMjhmRu7ver1JU3kjNHdeTTn6qU'
            },
            body: formData
        })

        return response
    }
    return (
        <PostContext.Provider value={{ AddPostFunc }} >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext