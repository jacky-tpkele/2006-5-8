export default function ResourceList({ items }: { items: { title: string; href: string; type: string }[] }) {
  return (
    <div className="tpk-guide__sidebarCard">
      <h3>Download Resources</h3>
      <div className="tpk-guide__resourceList">
        {items.map((item) => (
          <a key={item.title} href={item.href} className="tpk-guide__resourceItem">
            <div className="icon">PDF</div>
            <div>
              <strong>{item.title}</strong>
              <p>{item.type}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
