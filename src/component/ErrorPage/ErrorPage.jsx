import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h2>Opps !!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Fount</h3>
                    <p>Go back where you from .</p>
                   <Link to='/'><button>Go Back</button></Link>
                </div>
            }

        </div>
    );
};

export default ErrorPage;