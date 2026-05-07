type PageTitleProps = {
  title: string;
  crumb: string;
};

export function PageTitle({ title, crumb }: PageTitleProps) {
  return (
    <section className="page-title">
      <p>Home / {crumb}</p>
      <h1>{title}</h1>
    </section>
  );
}
