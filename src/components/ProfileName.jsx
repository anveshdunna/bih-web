import Link from "next/link";

function ProfileName(props) {
  const { name } = props;
  return (
    <Link className="font-semibold hover:underline" href={formatString(name)}>
      {name}
    </Link>
  );
}

export default ProfileName;

function formatString(input) {
  // Remove spaces and convert to lowercase
  return input.replace(/\s+/g, "").toLowerCase();
}
