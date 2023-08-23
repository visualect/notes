import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-4">
      <div className="flex flex-row justify-between">
        <div className="font-normal text-xl">
          <Link to="/">notes</Link>
        </div>
      </div>
    </div>
  );
}
