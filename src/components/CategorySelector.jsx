import { useState } from "react";
import { Input } from "./ui/input";

export default function CategorySelector() {
  const [categories, setCategories] = useState([
    "Coffee",
    "Ginger tea",
    "Bread omelette",
    "Green tea",
    "Masala tea",
    "Sandwich",
  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      if (!categories.includes(inputValue)) {
        setCategories([...categories, inputValue]);
      }
      if (!selectedCategories.includes(inputValue)) {
        setSelectedCategories([...selectedCategories, inputValue]);
      }
      setInputValue("");
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md bg-green-6">
      <div className="mb-4">
        <div className="relative mt-1">
          <input
            type="text"
            className="border-gray-300 block w-full rounded-md pr-10 sm:text-sm"
            placeholder="Search your options"
            value={selectedCategories.join(", ")}
            readOnly
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">Search</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          className="border-gray-300 block w-full rounded-md pr-10 sm:text-sm"
          placeholder="Search your options"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Input />
      <div className="mt-2 flex flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`m-1 rounded-full border px-3 py-1 ${
              selectedCategories.includes(category) ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category} {selectedCategories.includes(category) ? "-" : "+"}
          </button>
        ))}
      </div>
    </div>
  );
}
