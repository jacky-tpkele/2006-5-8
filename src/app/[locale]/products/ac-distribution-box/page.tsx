import { boxTypeRoute } from "@/components/distribution-boxes/boxTypeRoute";

const route = boxTypeRoute("ac-distribution-box");
export const generateMetadata = route.generateMetadata;
export default route.Page;
