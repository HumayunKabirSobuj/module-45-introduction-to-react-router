import { Link } from "react-router-dom";
import Users from "../Users/Users";


const User = ({user}) => {

    const {id,email, name, phone}=user;
    const userStyle={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius:'20px',
        // margin:'8px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;