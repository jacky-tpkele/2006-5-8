import Link from "next/link";

export default function QuickSupportCard() {
  return (
    <div className="tpk-guide__supportCard">
      <h3>Need Help?</h3>
      <p>Our engineers are ready to support your project with product selection, application matching and export preparation.</p>
      <Link href="/contact" className="tpk-guide__button tpk-guide__button--full">
        Contact Technical Support
      </Link>
      <ul>
        <li>Product selection support</li>
        <li>Application consultation</li>
        <li>Fast response for B2B buyers</li>
      </ul>
    </div>
  );
}
