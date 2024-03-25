const Hero = () => {
  return (
    <div className="bg-[#1313130D] min-h-[500px] my-10 rounded-2xl">
      <div className="lg:flex items-center justify-around">
        <div>
          <h1 className="text-5xl font-bold my-10">
            Books to freshen up <br /> your bookshelf
          </h1>
          <a
            href="#_"
            className="text-xl inline-flex items-center justify-center p-4  font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            View The List
          </a>
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
