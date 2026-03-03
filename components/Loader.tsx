const Loader = () => {
  return (
    <div className="h-full py-4 w-full flex justify-center items-center">
      <div className="flex justify-center items-center space-x-2">
        <div
          className="w-3.5 h-3.5 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-3.5 h-3.5 bg-secondary rounded-full animate-bounce"
          style={{ animationDelay: ".3s" }}
        ></div>
        <div
          className="w-3.5 h-3.5 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: ".6s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
