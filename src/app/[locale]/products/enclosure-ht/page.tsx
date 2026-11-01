import { enclosureRoute } from "@/components/distribution-boxes/enclosureRoute";

const route = enclosureRoute("enclosure-ht");
export const generateMetadata = route.generateMetadata;
export default route.Page;
