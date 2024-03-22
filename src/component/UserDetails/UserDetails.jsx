import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user=useLoaderData();
    const {name}=user;

    return (

        <div>

            <h2>Here all use Details : {name}</h2>
            
        </div>
    );
};

export default UserDetails;