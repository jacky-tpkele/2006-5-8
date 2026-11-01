import { boxTypeRoute } from "@/components/distribution-boxes/boxTypeRoute";

const route = boxTypeRoute("ats-panel");
export const generateMetadata = route.generateMetadata;
export default route.Page;
