import { routes as about } from "../views/about";
import { routes as experiences } from "../views/experiences";
import { routes as education } from "../views/education";
import { routes as projects } from "../views/projects";

export default [
    ...about,
    ...experiences,
    ...education,
    ...projects
];