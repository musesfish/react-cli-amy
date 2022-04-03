import { Fetch } from "../../utils";
const getTitle = () => Fetch(`/getTitle`, { method: "GET" });

export default {
  getTitle
};
