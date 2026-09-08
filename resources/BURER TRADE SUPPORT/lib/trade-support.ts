export type RequirementState = {
  customization: string[];
  documents: string[];
  tradeTerm: string;
  paymentPreference: string;
  shippingMethod: string;
  paperBox: {
    printType: string;
    barcode: boolean;
    qrCode: boolean;
    language: string;
    customBoxSize: boolean;
    outerCartonMark: boolean;
  };
  plasticPack: { style: string; purpose: string; hangingDisplay: boolean };
  marking: { logoPlacement: string; labelLanguage: string; customModelCode: boolean };
  origin: { purpose: string };
};

export const emptyRequirements: RequirementState = {
  customization: [], documents: [], tradeTerm: "", paymentPreference: "", shippingMethod: "",
  paperBox: { printType: "", barcode: false, qrCode: false, language: "", customBoxSize: false, outerCartonMark: false },
  plasticPack: { style: "", purpose: "", hangingDisplay: false },
  marking: { logoPlacement: "", labelLanguage: "", customModelCode: false },
  origin: { purpose: "" }
};

export function selectionCount(r: RequirementState) {
  return r.customization.length + r.documents.length + (r.tradeTerm ? 1 : 0) + (r.paymentPreference ? 1 : 0) + (r.shippingMethod ? 1 : 0);
}
