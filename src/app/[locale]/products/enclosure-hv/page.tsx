import { enclosureRoute } from "@/components/distribution-boxes/enclosureRoute";

const route = enclosureRoute("enclosure-hv");
export const generateMetadata = route.generateMetadata;
export default route.Page;
