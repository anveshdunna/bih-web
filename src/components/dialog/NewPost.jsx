import { useState, useEffect, useRef } from "react";

import { Input } from "../ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { placeNames } from "@/data/postData";
import IcLocation16 from "@/assets/icons/Location16";
import { Button } from "../ui/button";
import IcClose24 from "@/assets/icons/Close24";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import IcCloseCircle20 from "@/assets/icons/CloseCircle20";
import CategorySelector from "../CategorySelector";

function NewPost(props) {
  const { isOpen, onOpenChange } = props;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState(1);

  const placeInputRef = useRef(null);
  useEffect(() => {
    if (step === 1 && placeInputRef.current) {
      placeInputRef.current.focus(); // Focus the input when transitioning to step 1
    }
  }, [step]); // Dependency on step to trigger effect

  const searchPlace = (value) => {
    if (value) {
      const mockResults = placeNames.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  const handleInputChange = (value) => {
    setQuery(value);
    searchPlace(value);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setQuery(""); // Optionally, you can set the query to the selected item
    setResults([]); // Clear results after selection
    setStep(2);
  };

  const handleClear = () => {
    setQuery(""); // Clear the input
    setResults([]);
    placeInputRef.current?.focus(); // Set focus back to the input
  };

  useEffect(() => {
    if (step === 1 && selectedItem) {
      searchPlace(selectedItem); // Perform search when transitioning back to step 1
      setQuery(selectedItem); // Set query to the selected item
    }
  }, [step, selectedItem]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {/* <Dialog.Content className="fixed left-0 right-0 m-auto w-full items-stretch overflow-hidden bg-surface md:bottom-auto md:top-1/2 md:w-auto md:max-w-md md:-translate-y-1/2 md:transform md:rounded-3xl"></Dialog.Content> */}
      <DialogContent>
        {/* Dialog header */}
        <div className="fixed flex h-12 w-full flex-col items-center justify-center px-6 py-5 md:items-start">
          <DialogTitle className="text-body font-semibold md:text-title3">
            New post
          </DialogTitle>
        </div>

        <div className="mx-2 mb-4 mt-12 flex h-80 flex-col gap-4 overflow-hidden rounded-2xl border border-border shadow-md">
          {/* Step 1 */}
          {step === 1 && (
            <div className="flex h-full flex-col gap-2 px-4 pt-3">
              <div className="text-body font-semibold">Recommend a place</div>
              <Command>
                <div className="relative">
                  <CommandInput
                    ref={placeInputRef}
                    value={query}
                    onValueChange={handleInputChange}
                    placeholder="Search for the place"
                    type="search"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={handleClear}
                  >
                    <IcCloseCircle20 />
                  </Button>
                </div>

                <CommandList>
                  {query && results.length === 0 ? (
                    <CommandEmpty>No results found</CommandEmpty>
                  ) : (
                    results.map((result, index) => (
                      <CommandItem
                        key={index}
                        onSelect={() => handleSelect(result)}
                      >
                        {result}
                      </CommandItem>
                    ))
                  )}
                </CommandList>
              </Command>
            </div>
          )}

          {step === 2 && selectedItem && (
            <div className="">
              <div
                role="button"
                className="flex h-10 items-center gap-1 border-b border-border px-4 text-footnote hover:bg-fill-secondary-hover active:bg-fill-secondary-active"
                onClick={() => {
                  setStep(1);
                  setQuery(selectedItem);
                }}
              >
                <IcLocation16 />
                {selectedItem}
              </div>
              <div className="p-4">
                <div className="font-semibold">
                  What did you like here the most?
                </div>
                <CategorySelector />
                <Command>
                  <CommandInput placeholder="Search options..." />
                  <CommandList>
                    {[
                      "Coffee",
                      "Ginger tea",
                      "Bread omelette",
                      "Green tea",
                      "Masala tea",
                      "Tea",
                      "Sandwich",
                      "Ice tea",
                      "Double omelette",
                      "Club sandwich",
                    ].map((option, index) => (
                      <CommandItem key={index}>{option}</CommandItem>
                    ))}
                  </CommandList>
                </Command>
              </div>
            </div>
          )}
        </div>

        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-2 text-icon md:left-auto md:right-2"
          >
            <IcClose24 />
          </Button>
        </DialogClose>

        <Button className="absolute right-6 top-2 md:hidden" disabled>
          Post
        </Button>

        {/* Dialog footer */}
        <div className="hidden justify-end gap-2 bg-material-thick px-4 py-3 shadow-borderTop backdrop-blur-xl md:flex">
          <Button variant="outline">Cancel</Button>
          <Button>Post</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewPost;
