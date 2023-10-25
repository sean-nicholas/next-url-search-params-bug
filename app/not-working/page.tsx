export default function NotWorking({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const params = new URLSearchParams(searchParams);
  const name = params.get("name");

  return <div>Hello {name}</div>;
}
