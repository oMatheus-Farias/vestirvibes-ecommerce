import MoonLoader from "react-spinners/MoonLoader";

const LoadComponent = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <MoonLoader size={40} color="#000" />
    </div>
  );
};

export default LoadComponent;
