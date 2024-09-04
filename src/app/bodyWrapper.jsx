"use client";

import GlobalNav from "@/components/nav/GlobalNav";
import { useDialog } from "@/contexts/DialogContext";

export default function BodyWrapper({ children }) {
  const { isDialogOpen } = useDialog();

  return (
    // <div
    //   className={`${isDialogOpen ? "max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:h-full max-sm:w-full max-sm:overflow-hidden" : ""}`}
    // >
    //   <GlobalNav />
    //   <div
    //     className={`${isDialogOpen ? "max-sm:relative max-sm:left-0 max-sm:top-0 max-sm:h-full max-sm:w-full max-sm:overflow-y-auto max-sm:bg-red-9" : ""}`}
    //   >
    //     {children}
    //   </div>
    // </div>
    <div className="w-full">
      <GlobalNav />
      {children}
    </div>
  );
}

// .fixed-wrapper {
//   position: fixed;
//   background-color: aquamarine;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden; /* Prevents internal content from affecting layout */
// }

// .scrollable-content {
//   position: relative;
//   background-color: red; /* Absolute positioning to fit within the fixed wrapper */
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow-y: auto; /* Enable vertical scrolling */
// }
