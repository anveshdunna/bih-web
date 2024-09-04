"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export const DialogContext = createContext();
export const DialogProvider = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <DialogContext.Provider value={{ isDialogOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
