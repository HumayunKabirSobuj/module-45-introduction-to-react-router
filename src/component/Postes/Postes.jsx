import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Postes = () => {
    const posts=useLoaderData();
    return (
        <div>
            <h2>Posts : {posts.length}</h2>
            <div className="users">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Postes;