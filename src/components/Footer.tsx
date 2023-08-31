import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="py-4 flex-shrink-0">
      <div className="flex flex-row justify-between items-center">
        <a
          href="https://github.com/visualect/notes"
          target="_blank"
          className="hover:text-blue-500 transition duration-300 ease-out"
        >
          <AiFillGithub size={20} />
        </a>
        <div className="text-xs">
          Made by{" "}
          <a
            href="https://github.com/visualect"
            target="_blank"
            className="underline underline-offset-4 hover:text-blue-500 transition duration-300 ease-out"
          >
            Yan
          </a>
        </div>
      </div>
    </div>
  );
}
