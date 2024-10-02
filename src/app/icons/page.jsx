"use client";

import PageTemplate from "@/components/PageTemplate";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import ReactDOMServer from "react-dom/server";
import IconMap from "@/assets/iconlog";

let iconArray = Object.entries(IconMap);

const arrayWith12 = iconArray.filter((value) => value[0].includes("12"));
const arrayWith16 = iconArray.filter((value) => value[0].includes("16"));
const arrayWith20 = iconArray.filter((value) => value[0].includes("20"));
const arrayWith24 = iconArray.filter((value) => value[0].includes("24"));

function Page() {
  const [search, setSearch] = useState("");

  // Copy to clipboard code
  const [isCopied, setIsCopied] = useState(false);
  const handleIconClick = (returnStatement, name) => {
    copyToClipboard(returnStatement, name);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Hide "Path copied" message after 1.5 seconds
  };

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard:", text);
        console.log(name);
        toast.success(`✨ '${name}' svg copied`, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          draggable: false,
        });
      },
      (error) => {
        console.error("Failed to copy text to clipboard:", error);
        toast.error("Copy failed", {
          position: "bottom-center",
          autoClose: 1000,
        });
      },
    );
  };
  // Copy to clipboard code ends

  return (
    <>
      <PageTemplate>
        <div className="section">
          <div className="fixed-container">
            <div className="w-full max-w-[640px]">
              <div className="mt-10">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search icons"
                  className="mb-10 w-80 rounded-lg border border-border px-4 py-2"
                ></input>

                <div className="text-bodyMd font-semibold text-fg">
                  24px icons
                </div>
                <div className="mb-4 mt-2 grid gap-px overflow-clip rounded-lg border border-border bg-white sm:grid-cols-2 md:grid-cols-3">
                  {arrayWith24
                    .filter((a) => {
                      return search.toLowerCase() === ""
                        ? a
                        : a[0].toLowerCase().includes(search);
                    })
                    .map(([iconName], i) => {
                      const IconComponent = IconMap[iconName];
                      const returnStatement = ReactDOMServer.renderToString(
                        <IconComponent color="currentColor" />,
                      ); // Get the return statement as a string

                      // Check if the icon exists in the map
                      if (!IconComponent) {
                        return null; // If icon doesn't exist, return null to avoid errors
                      }

                      return (
                        <button
                          key={i}
                          onClick={() =>
                            handleIconClick(returnStatement, iconName)
                          }
                          className="flex items-center gap-2 p-2  text-bodyMd text-text outline outline-1 outline-gray-3 hover:bg-fill-secondary-hover"
                        >
                          <div className="flex h-6 w-6 items-center justify-center ">
                            <IconComponent color="currentColor" />
                          </div>
                          <span>{iconName}</span>
                        </button>
                      );
                    })}
                </div>

                <div className="mt-8 text-bodyMd font-semibold text-fg">
                  20px icons
                </div>
                <div className="mb-4 mt-2 grid gap-px overflow-clip rounded-lg border border-border bg-white sm:grid-cols-2 md:grid-cols-3">
                  {arrayWith20
                    .filter((a) => {
                      return search.toLowerCase() === ""
                        ? a
                        : a[0].toLowerCase().includes(search);
                    })
                    .map(([iconName], i) => {
                      const IconComponent = IconMap[iconName];
                      const returnStatement = ReactDOMServer.renderToString(
                        <IconComponent color="currentColor" />,
                      ); // Get the return statement as a string

                      // Check if the icon exists in the map
                      if (!IconComponent) {
                        return null; // If icon doesn't exist, return null to avoid errors
                      }

                      return (
                        <button
                          key={i}
                          onClick={() =>
                            handleIconClick(returnStatement, iconName)
                          }
                          className="flex items-center gap-2 p-2  text-bodyMd text-text outline outline-1 outline-gray-3 hover:bg-fill-secondary-hover"
                        >
                          <div className="flex h-6 w-6 items-center justify-center ">
                            <IconComponent color="currentColor" />
                          </div>
                          <span>{iconName}</span>
                        </button>
                      );
                    })}
                </div>

                <div className="mt-8 text-bodyMd font-semibold text-fg">
                  16px icons
                </div>
                <div className="mb-4 mt-2 grid gap-px overflow-clip rounded-lg border border-border bg-white sm:grid-cols-2 md:grid-cols-3">
                  {arrayWith16
                    .filter((a) => {
                      return search.toLowerCase() === ""
                        ? a
                        : a[0].toLowerCase().includes(search);
                    })
                    .map(([iconName], i) => {
                      const IconComponent = IconMap[iconName];
                      const returnStatement = ReactDOMServer.renderToString(
                        <IconComponent color="currentColor" />,
                      ); // Get the return statement as a string

                      // Check if the icon exists in the map
                      if (!IconComponent) {
                        return null; // If icon doesn't exist, return null to avoid errors
                      }

                      return (
                        <button
                          key={i}
                          onClick={() =>
                            handleIconClick(returnStatement, iconName)
                          }
                          className="flex items-center gap-2 p-2  text-bodyMd text-text outline outline-1 outline-gray-3 hover:bg-fill-secondary-hover"
                        >
                          <div className="flex h-6 w-6 items-center justify-center ">
                            <IconComponent color="currentColor" />
                          </div>
                          <span>{iconName}</span>
                        </button>
                      );
                    })}
                </div>

                <div className="mt-8 text-bodyMd font-semibold text-fg">
                  12px icons
                </div>
                <div className="mb-4 mt-2 grid gap-px overflow-clip rounded-lg border border-border bg-white sm:grid-cols-2 md:grid-cols-3">
                  {arrayWith12
                    .filter((a) => {
                      return search.toLowerCase() === ""
                        ? a
                        : a[0].toLowerCase().includes(search);
                    })
                    .map(([iconName], i) => {
                      const IconComponent = IconMap[iconName];
                      const returnStatement = ReactDOMServer.renderToString(
                        <IconComponent color="currentColor" />,
                      ); // Get the return statement as a string

                      // Check if the icon exists in the map
                      if (!IconComponent) {
                        return null; // If icon doesn't exist, return null to avoid errors
                      }

                      return (
                        <button
                          key={i}
                          onClick={() =>
                            handleIconClick(returnStatement, iconName)
                          }
                          className="flex items-center gap-2 p-2  text-bodyMd text-text outline outline-1 outline-gray-3 hover:bg-fill-secondary-hover"
                        >
                          <div className="flex h-6 w-6 items-center justify-center ">
                            <IconComponent color="currentColor" />
                          </div>
                          <span>{iconName}</span>
                        </button>
                      );
                    })}
                </div>

                <ToastContainer
                  transition={Slide}
                  newestOnTop
                  icon={false}
                  closeButton={false}
                  className="bottom-0 left-1/2 w-80 -translate-x-1/2"
                  toastClassName="text-fg-success mb-2 rounded-lg min-h-0"
                  bodyClassName="text-fg  text-bodyMd p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default Page;
