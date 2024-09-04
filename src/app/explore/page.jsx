export default function Trending(props) {
  return (
    <div className="mb-16 mt-2">
      <div>Trending posts</div>
      <div>Trending places</div>
      <div>Trending people</div>
      {Array(5)
        .fill("Dummy")
        .map((item, index) => (
          <div key={item.key} className="h-96 rounded-lg bg-red-8">
            Hello
          </div>
        ))}
    </div>
  );
}
