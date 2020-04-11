import { toast } from "react-toastify";

/*
 * show error toast message
 * @param {a message string} message
 */
export const showErrorMessage = function (message) {
  toast.error(message);
};
