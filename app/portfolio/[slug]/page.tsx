/*
export default function Page() {
  return <h1>Photography Page</h1>;
}
*/
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}