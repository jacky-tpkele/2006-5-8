import { enclosureRoute } from "@/components/distribution-boxes/enclosureRoute";

const route = enclosureRoute("enclosure-pz30");
export const generateMetadata = route.generateMetadata;
export default route.Page;
