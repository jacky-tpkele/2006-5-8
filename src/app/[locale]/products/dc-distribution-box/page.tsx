import { boxTypeRoute } from "@/components/distribution-boxes/boxTypeRoute";

const route = boxTypeRoute("dc-distribution-box");
export const generateMetadata = route.generateMetadata;
export default route.Page;
