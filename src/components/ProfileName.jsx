import Link from "next/link";

export default function ProfileName(props) {
  const { name } = props;
  return (
    <Link className="font-semibold hover:underline" href={formatString(name)}>
      {name}
    </Link>
  );
}

function formatString(input) {
  // Remove spaces and convert to lowercase

  if (typeof input !== "string") {
    return "error";
  }
  return input.replace(/\s+/g, "").toLowerCase();
}
