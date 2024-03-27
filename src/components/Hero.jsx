import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#1313130D] min-h-[500px] lg:my-10 my-6 rounded-2xl">
      <div className="lg:flex lg:flex-row items-center justify-around flex flex-col-reverse">
        <div className="lg:p-4 pb-10">
          <h1 className="lg:text-5xl text-2xl font-bold my-2 lg:my-10">
            Books to freshen up <br /> your bookshelf
          </h1>
          <NavLink to="/listed-books">
            <a
              className="lg:text-xl inline-flex items-center justify-center p-4  font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              View The List
            </a>
          </NavLink>
        </div>
        <div>
          <img
            src="https://i.ibb.co/T09TgW9/pexels-pixabay-256450-removebg-preview.png"
            className="w-[320px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
