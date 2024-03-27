import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-xl flex-col justify-center items-center">
            <h2>Oops!!! </h2>
            <Link to="/">
                <button className="btn">Go home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;