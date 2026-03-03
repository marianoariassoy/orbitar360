const Points = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span
        className={`rounded-full bg-primary ${size === "sm" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}`}
      ></span>
      <span
        className={`rounded-full bg-secondary ${size === "sm" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}`}
      ></span>
    </div>
  );
};

export default Points;
