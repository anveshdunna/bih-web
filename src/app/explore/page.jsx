export default function Explore() {
  return (
    <div className="my-2">
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
