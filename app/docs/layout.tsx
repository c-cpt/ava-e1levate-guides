import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import EditOnGithub from "../components/EditOnGithub";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="absolute top-10 right-[125px]">
        <EditOnGithub />
      </div>
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </>
  );
}
