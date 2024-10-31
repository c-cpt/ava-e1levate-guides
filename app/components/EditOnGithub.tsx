"use client";
import { usePathname } from "next/navigation";
import React from "react";

const EditOnGithub: React.FC = () => {
  const baseRepo = "https://github.com/ScorchInteractive/ava-e1levate-guides";
  const pathname = usePathname();
  function getEditPath() {
    return `${baseRepo}/blob/main/content${
      pathname != "/docs" ? pathname : "/docs/index"
    }.mdx`;
  }

  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden">
      <button
        onClick={() => window.open(getEditPath(), "_blank")}
        className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 border bg-fd-secondary hover:bg-fd-accent hover:text-fd-accent-foreground gap-1.5 py-1 text-fd-muted-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-pen size-3.5"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
        </svg>
        Edit on GitHub
      </button>
    </div>
  );
};

export default EditOnGithub;
