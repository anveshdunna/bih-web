import Icon from "@/assets/Icon";
import { Button } from "../ui/button";

function CreateNewButton(props) {
  const { name, iconName, icons, isMobile, onClick } = props;
  const Icon = icons[iconName];
  const buttonClass = isMobile
    ? "h-auto flex-col rounded-lg px-6 py-4"
    : "justify-start px-2 h-10";

  return (
    <Button variant="ghost" className={buttonClass} onClick={onClick}>
      <Icon />
      {name}
    </Button>
  );
}

export default CreateNewButton;
