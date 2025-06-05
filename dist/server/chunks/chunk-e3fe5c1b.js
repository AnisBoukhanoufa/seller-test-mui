import { jsx } from "react/jsx-runtime.js";
import React__default, { useContext } from "react";
const Context = React__default.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
export {
  PageContextProvider as P,
  usePageContext as u
};
