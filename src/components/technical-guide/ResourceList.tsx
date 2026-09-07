import Link from "next/link";

type Resource = {
  title: string;
  href: string;
  type: string;
};

type ResourceListProps = {
  items: Resource[];
};

export default function ResourceList({ items }: ResourceListProps) {
  // Filter out resources with "#" placeholder href
  const validResources = items.filter(item => item.href !== "#");

  if (validResources.length === 0) {
    return null;
  }

  return (
    <div className="tpk-guide__sidebarCard">
      <h3>Download Resources</h3>
      <div className="tpk-guide__resourceList">
        {validResources.map((item) => (
          <Link key={item.title} href={item.href} className="tpk-guide__resourceItem">
            <div className="icon">{item.type}</div>
            <div>
              <strong>{item.title}</strong>
              <p>Download {item.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
