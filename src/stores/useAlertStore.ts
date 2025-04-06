import { create } from "zustand";
import { toast } from "react-toastify";


type AlertType = "success" | "error" | "info" | "warning";
interface Alert {
  showAlert: (msg: string, type?: AlertType) => void;
}

export const useAlertStore = create<Alert>((set) => ({
  showAlert: (msg, type = "info") => {
    if (type === "success") toast.success(msg);
    else if (type === "error") toast.error(msg);
    else toast(msg);
  },
}));
