export default function RelatedSidebar({ items }: { items: { name: string; href: string; desc: string }[] }) {
  return (
    <div className="tpk-guide__sidebarCard">
      <div className="tpk-guide__sidebarTitleRow">
        <h3>Related Products</h3>
        <a href="/products">View All →</a>
      </div>
      <div className="tpk-guide__productList">
        {items.map((item) => (
          <a key={item.name} href={item.href} className="tpk-guide__productItem">
            <div className="tpk-guide__productThumb" />
            <div>
              <strong>{item.name}</strong>
              <p>{item.desc}</p>
              <span>View Product →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
