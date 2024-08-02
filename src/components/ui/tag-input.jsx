import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import "../../../node_modules/@accessible-components/tag-input/build/tag-input.min.css";
import "./tag-input.css";
import TagInputLibrary from "../../../node_modules/@accessible-components/tag-input/build/tag-input.min.js";

const TagInput = forwardRef(
  (
    {
      initialTags = [],
      label = "Tags",
      placeholder = "Add tags",
      disabled = false,
      name = "tag-input",
      hiddenLabel = false,
      onInit = () => {},
      onTagAdd = () => {},
      onTagRemove = () => {},
      onTagUpdate = () => {},
      ariaTag = "Tag {{TAG}}.",
      ariaEditTag = "Edit tag.",
      ariaDeleteTag = "Delete tag {{TAG}}.",
      ariaTagAdded = "Tag {{TAG}} added.",
      ariaTagUpdated = "Tag updated to {{TAG}}.",
      ariaTagDeleted = "Tag {{TAG}} deleted.",
      ariaTagSelected = "Tag {{TAG}} selected. Press enter to edit, delete to delete.",
      ariaNoTagsSelected = "No tags selected.",
      ariaInputLabel = "{{TAGS}} tags. Use left and right arrow keys to navigate, enter or tab to create, delete to delete tags.",
    },
    ref,
  ) => {
    const tagInputRef = useRef(null);
    const tagInputInstance = useRef(null);

    useEffect(() => {
      const currentRef = tagInputRef.current;

      if (currentRef) {
        tagInputInstance.current = new TagInputLibrary(currentRef, {
          tags: initialTags,
          label,
          placeholder,
          disabled,
          name,
          hiddenLabel,
          onInit,
          onTagAdd,
          onTagRemove,
          onTagUpdate,
          ariaTag,
          ariaEditTag,
          ariaDeleteTag,
          ariaTagAdded,
          ariaTagUpdated,
          ariaTagDeleted,
          ariaTagSelected,
          ariaNoTagsSelected,
          ariaInputLabel,
        });

        return () => {
          if (currentRef) {
            currentRef.innerHTML = "";
          }
        };
      }
    }, [
      initialTags,
      label,
      placeholder,
      disabled,
      name,
      hiddenLabel,
      onInit,
      onTagAdd,
      onTagRemove,
      onTagUpdate,
      ariaTag,
      ariaEditTag,
      ariaDeleteTag,
      ariaTagAdded,
      ariaTagUpdated,
      ariaTagDeleted,
      ariaTagSelected,
      ariaNoTagsSelected,
      ariaInputLabel,
    ]);

    useImperativeHandle(ref, () => ({
      addTag: (tag) => {
        if (tagInputInstance.current) {
          tagInputInstance.current.addTag(tag);
        }
      },
      removeTag: (tag) => {
        if (tagInputInstance.current) {
          tagInputInstance.current.removeTag(tag);
        }
      },
      getTags: () => {
        if (tagInputInstance.current) {
          return tagInputInstance.current.getTags();
        }
        return [];
      },
    }));

    return <div ref={tagInputRef}></div>;
  },
);

TagInput.displayName = "TagInput";

export default TagInput;
