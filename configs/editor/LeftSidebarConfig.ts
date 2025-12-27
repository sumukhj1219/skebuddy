import { Template } from "@/types/template";
import { v4 as uuid } from "uuid";
import { SkeletonProfileOne, SkeletonCardOne } from "./Templates";
import { TemplateCodeRecord } from "@/components/code/CodeTemplateRecords";

export const LeftSidebarConfig: Template[] = [
  {
    id: uuid(),
    htmlId: "profile-one",
    name: "Profile 1",
    image: "/templates/Profile1.png",
    render: SkeletonProfileOne,
    animation: "none",
    height: 180,
    width: 250,
    code: TemplateCodeRecord.SkeletonProfileOne,
  },
  {
    id: uuid(),
    htmlId: "skeletonCard-one",
    name: "SkeletonCard 1",
    image: "/templates/SkeletonCard1.png",
    render: SkeletonCardOne,
    animation: "none",
    height: 180,
    width: 250,
    code: TemplateCodeRecord.SkeletonCardOne,
  },
];
