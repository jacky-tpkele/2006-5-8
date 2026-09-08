export function createAdvisorLink(product: string, application: string, market?: string) {
  const params = new URLSearchParams({ product, application });
  if (market) params.set('market', market);
  return `/market-access-advisor?${params.toString()}`;
}
