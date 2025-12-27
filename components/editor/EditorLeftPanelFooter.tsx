import React from "react";
import { FiGithub } from "react-icons/fi";

const EditorLeftPanelFooter = () => {
  return (
    <div className="rounded p-1 border-t cursor-pointer text-center">
      <span className="flex border  items-center rounded justify-center mx-auto gap-x-2 p-4">
        <FiGithub className="w-4 h-4" />
        Star Github
      </span>
    </div>
  );
};

export default EditorLeftPanelFooter;
