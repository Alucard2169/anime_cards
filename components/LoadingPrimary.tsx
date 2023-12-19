import { Triangle } from "react-loader-spinner";

const LoadingPrimary = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Triangle
        height="120"
        width="120"
        color="#800080 "
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default LoadingPrimary;
