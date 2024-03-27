import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-xl flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Oops!!! </h2>
        <Link to="/">
          <button className="btn">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
