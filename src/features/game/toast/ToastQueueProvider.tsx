import React, { FC, useState } from "react";

import { createContext } from "react";

export interface Toast {
  content: string;
  id: string;
  icon?: string;
  timeout?: number;
}

export type SetToast = (toast: Omit<Toast, "id">) => void;

export const ToastContext = createContext<{
  removeToast: (id: string) => void;
  setToast: (toast: Omit<Toast, "id">) => void;
  toastList: Toast[];
}>({ removeToast: console.log, setToast: console.log, toastList: [] });

const MAX_TOAST = 5;

export const ToastProvider: FC = ({ children }) => {
  const [toastList, setToastList] = useState<Toast[]>([]);

  const setToast: SetToast = (toast) => {
    if (toastList.length > 4) {
      setToastList(toastList.slice(0, MAX_TOAST));
    }
    const id = `${Date.now()}-${toast.icon}`;

    window.setTimeout(() => {
      removeToast(id);
    }, toast.timeout || 2000);
    const newToast = { id: id, ...toast };
    setToastList((toastList) => [newToast, ...toastList]);
  };

  const removeToast = (toastId: string) => {
    setToastList((toastList) => [
      ...toastList.filter(({ id }) => id !== toastId),
    ]);
  };

  return (
    <ToastContext.Provider value={{ removeToast, setToast, toastList }}>
      {children}
    </ToastContext.Provider>
  );
};
