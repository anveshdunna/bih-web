import IcPlus24 from "@/assets/icons/Plus24";
import { Button } from "../ui/button";
import IcPost24 from "@/assets/icons/Post24";
import IcList24 from "@/assets/icons/List24";

function CreateNewButton(props) {
  const { name, iconName, isMobile, onClick } = props;
  const buttonClass =
    isMobile === true
      ? "h-auto flex-col rounded-lg px-6 py-4"
      : "justify-start h-10 rounded-lg bg-fill-secondary";

  return (
    <Button variant="secondary" className={buttonClass} onClick={onClick}>
      {/* <Icon /> */}
      {(name === "Post" || name === "Create new post") && <IcPost24 />}
      {(name === "List" || name === "Create new list") && <IcList24 />}

      {name}
    </Button>
  );
}

export default CreateNewButton;
