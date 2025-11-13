import { createPortal } from "react-dom";

export default function CursorPortal({ children }) {
  return createPortal(children, document.body);
}
