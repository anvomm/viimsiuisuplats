import { forwardRef } from "react";

export const Backdrop = forwardRef<
HTMLDivElement,
{ open?: boolean; className: string }
>((props, ref) => {
const { open, className, ...other } = props;
return (
  <div
    className="fixed top-0 bottom-0 right-0 z-[-1] inset-0 bg-[#000]/[0.5]"
    ref={ref}
    {...other}
  />
);
});