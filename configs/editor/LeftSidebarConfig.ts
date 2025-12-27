import { Template } from "@/types/template";
import { v4 as uuid } from "uuid";
import { ProfileOne } from "./Templates";

export const LeftSidebarConfig: Template[] = [
  {
    id: uuid(),
    htmlId: "profile-one",
    name: "Profile 1",
    image: "/templates/Profile1.png",
    render: ProfileOne,
    animation: "none",
    height: 180,
    width: 250,
  },
];
