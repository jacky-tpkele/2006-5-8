import Image from "next/image";
import Link from "next/link";

type RelatedProduct = {
  name: string;
  href: string;
  desc: string;
  image?: string;
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
            {item.image ? (
              <div className="tpk-guide__productThumb">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={58}
                  height={58}
                  className="tpk-guide__productThumbImg"
                />
              </div>
            ) : (
              <div className="tpk-guide__productThumb" />
            )}
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
