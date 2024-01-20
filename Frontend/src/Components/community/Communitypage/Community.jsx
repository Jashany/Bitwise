import { Fragment ,useState,useEffect} from "react";
import style from './Community.module.css';
import Post from "../Post/Post.jsx";
import axios from "axios";
const Community = () => {

    const [posts, setPosts] = useState([]);

    
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/getPosts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error during posts retrieval:', error);
            }
        };
        useEffect(() => {
            fetchPosts();
        }, []);

    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/addPost', { content });
            console.log(response);
            if (response.status === 201) {
                console.log('Post created!');
                setContent(''); // Clear the input field
            }
        } catch (error) {
            console.error('Error during post creation:', error);
        }
    };

    return ( 
        <Fragment>
            <div className={style.main}>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="What's on your mind?" value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Post</button>
            </form>
                {posts.map((post, index) => {
                    return <Post key={index} props={post} />
                })
            }
            </div>
        </Fragment>
     );
}
 
export default Community;