
import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';



function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        fetchPosts();

    }, []);


    const fetchPosts = async () => {

        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); //to wait for 2 sec so the loading can be shsown

            const mockPosts = [
                { id: 1, title: "First Post", body: "THis is my first post" },
                { id: 1, title: "Second Post", body: "THis is my Second post" },
                { id: 1, title: "Third Post", body: "THis is my Third post" }
            ]
            setPosts(mockPosts)
            setLoading(false)

        } catch (error) {
            setError(error.message)
            setLoading(false)

        }
    }


    if (loading) return <div>Loadind posts..</div>
    if (error) return <div>Error: {error}</div>


    return (

        <div className="app">

            <div className='content'>
                <h1>Welcome to my website</h1>
            </div>

  


            <div className='post-list'>
                <h2>Latest Post</h2>
                {posts.length === 0 ? (
                    <p>No Post availabe</p>
                ) : (
                    <ul>
                        {posts.map(postItem => (
                            <li key={postItem.id}>
                                <h3>{postItem.title}</h3>
                                <p>{postItem.body}</p>
                                <button>View Details ...</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <UserForm />

        </div>
    )


}

export default Home;