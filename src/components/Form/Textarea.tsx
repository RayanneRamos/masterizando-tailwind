/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<"textarea">;

export function Textarea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
