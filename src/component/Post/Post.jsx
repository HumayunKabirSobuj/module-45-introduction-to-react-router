import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {

    const navigate=useNavigate();

    const { id, title } = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',

        // margin:'8px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details </button></Link>
            <button onClick={handleShowDetail}>See Details</button>

        </div>
    );
};

export default Post;