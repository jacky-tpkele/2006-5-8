import { InquiryModal } from "@/components/InquiryModal";

export default function QuickSupportCard() {
  return (
    <div className="tpk-guide__supportCard">
      <h3>Need Help?</h3>
      <InquiryModal
        triggerLabel="Contact Technical Support"
        triggerClassName="tpk-guide__button tpk-guide__button--full"
        intent="technical-support"
      />
      <p>Our engineers are ready to support your project with product selection, application matching and export preparation.</p>
      <ul>
        <li>Product selection support</li>
        <li>Application consultation</li>
        <li>Fast response for B2B buyers</li>
      </ul>
    </div>
  );
}
