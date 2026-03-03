import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mt-1 text-sm px-6 text-primary">{error.message}</div>;
};

export default Error;
