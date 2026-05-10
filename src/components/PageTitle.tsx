type PageTitleProps = {
  title: string;
  crumb: string;
};

export function PageTitle({ title, crumb: _crumb }: PageTitleProps) {
  return (
    <section className="page-title">
      <h1>{title}</h1>
    </section>
  );
}
