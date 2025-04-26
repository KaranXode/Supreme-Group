import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-4">
      <h1 className="text-[4rem] md:text-[8rem] text-primary-500 font-bold">404</h1>
      <p className="font-normal px-3 leading-none text-center text-black text-xl block pt-2 md:pb-6 pb-2 ">The page you have requested doesn't exist.</p>
      <Link
        to="/"
    
      >
        <Button variant="primary">Go to Homepage</Button>
      </Link>
    </div>
  );
}
