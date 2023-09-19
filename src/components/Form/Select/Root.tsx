/* eslint-disable prettier/prettier */
"use client";

import * as Select from "@radix-ui/react-select";
import { ComponentProps, ReactNode } from "react";

export interface RootProps extends ComponentProps<typeof Select.Root> {
  children: ReactNode;
}

export function Root(props: RootProps) {
  return <Select.Root {...props} />;
}
