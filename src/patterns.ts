import { definePattern } from "@pandacss/dev";

const ellipsis = definePattern({
  description: "Text ellipsis",
  jsxElement: "span",
  properties: {},
  defaultValues: {},
  transform(props) {
    const { truncate: _, ...rest } = props;
    return {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      ...rest,
    };
  },
});

const paper = definePattern({
  description: "Paper component, set a light white border and rounded corners",
  jsxElement: "div",
  transform(props) {
    return {
      overflow: "hidden",
      borderRadius: "2",
      borderWidth: "0__x",
      borderColor: "white/10",
      ...props,
    };
  },
});

const backdrop = definePattern({
  description: "Backdrop component",
  jsxElement: "div",
  properties: {},
  transform(props) {
    return {
      position: "fixed",
      inset: "0",
      backgroundColor: "black/30",
      backdropFilter: "blur(4px)",
      ...props,
    };
  },
});

export const patterns = {
  ellipsis,
  paper,
  backdrop,
};
