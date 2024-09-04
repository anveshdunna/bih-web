import { cn } from "@/lib/utils";
import CreatableSelect from "react-select/creatable";
import { components, MenuProps } from "react-select";
import { Fragment } from "react";
import { red } from "@radix-ui/colors";

const options = [
  { value: "coffee", label: "Coffee" },
  { value: "gingertea", label: "Ginger tea" },
  { value: "breadomlette", label: "Bread omlette" },
  { value: "tea", label: "Tea" },
  { value: "sandwich", label: "Sandwich" },
  { value: "clubsandwich", label: "Club sandwich" },
  { value: "greentea", label: "Green tea" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectCategory() {
  return (
    <CreatableSelect
      isMulti
      options={options}
      menuIsOpen
      hideSelectedOptions={false}
      placeholder={"e.g. Ambience, Views..."}
      unstyled
      styles={{
        menuList: (baseStyles, state) => ({
          ...baseStyles,
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          width: "auto",
          display: "flex",
          cursor: "pointer",
        }),
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
        }),
      }}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            "border rounded-xl p-1",
            isFocused ? "border-red-5" : "border-blue-5",
          ),
        valueContainer: ({}) => cn("gap-1"),
        placeholder: ({}) => cn("text-bodyLg text-fg-tertiary"),
        multiValue: ({}) =>
          cn("bg-fill gap-1 h-8 items-center pl-2 rounded-lg"),
        multiValueLabel: ({}) => cn("text-bodyLg"),
        menu: ({}) => cn("text-bodyMd"),
        option: ({ isFocused, isSelected }) =>
          cn(
            "h-7 items-center rounded-lg px-3 bg-fill transition border",
            isSelected
              ? "bg-fillSelected hover:bg-fillSelected-hover active:bg-fillSelected-active text-fg-brand border-border-brand"
              : "bg-fill border-transparent hover:bg-fill-hover active:bg-fill-active",
          ),
      }}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu: Menu,
        MenuList: MenuList,
      }}
    />
  );
}

function Menu({ children, ...props }) {
  return (
    <>
      <div className="mb-2 text-bodySm text-fg-secondary">Suggestions:</div>
      <components.Menu {...props}>{children}</components.Menu>
    </>
  );
}

function MenuList({ children, ...props }) {
  return (
    <components.MenuList {...props} className="flex flex-wrap gap-2">
      {children}
    </components.MenuList>
  );
}
