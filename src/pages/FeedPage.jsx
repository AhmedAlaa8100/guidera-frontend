import React, { useContext, useEffect, useState } from 'react'
import { getAllPostsApi } from '../services/PostsService'
import LoadingScreen from './LoadingScreen'

export default function FeedPage() {

    const { counter, setCounter } = useContext(counterContext)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getAllPosts() {

        const data = await getAllPostsApi()
        setIsLoading(false)
        if (data.message == "success") {
            setPosts(data.posts);
        }


    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <div className='grid gap-3 max-w-2xl mx-auto '>

            {
                isLoading ? <LoadingScreen /> :
                    posts.map((post) => <Post key={post.id} post={post} />)
            }





        </div>
    )


}
