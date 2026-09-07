import Link from "next/link";

type RelatedProduct = {
  name: string;
  href: string;
  desc: string;
};

type RelatedSidebarProps = {
  items: RelatedProduct[];
};

export default function RelatedSidebar({ items }: RelatedSidebarProps) {
  return (
    <div className="tpk-guide__sidebarCard">
      <div className="tpk-guide__sidebarTitleRow">
        <h3>Related Products</h3>
        <Link href="/products">View All →</Link>
      </div>
      <div className="tpk-guide__productList">
        {items.map((item) => (
          <Link key={item.name} href={item.href} className="tpk-guide__productItem">
            <div className="tpk-guide__productThumb" />
            <div>
              <strong>{item.name}</strong>
              <p>{item.desc}</p>
              <span>View Product →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
