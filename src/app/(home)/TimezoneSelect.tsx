/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
"use client";

import { timezones } from "@/utils/timezones";
import { useState } from "react";
import * as Select from "@/components/Form/Select";
import { Clock } from "lucide-react";

export interface TimezonesSelectProps {}

type TimezonesCode = keyof typeof timezones;

export function TimezonesSelect(props: TimezonesSelectProps) {
  const [value, setValue] = useState<TimezonesCode | undefined>(undefined);

  function handleTimezonesSelected(value: string) {
    setValue(value as TimezonesCode);
  }

  return (
    <Select.Root
      name="timezones"
      value={value}
      onValueChange={handleTimezonesSelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your timezone...">
          {value && (
            <>
              <Clock className="h-5 w-5 rounded-full object-cover object-center" />
              {timezones[value]}
            </>
          )}
        </Select.Value>
      </Select.Trigger>
      <Select.Content>
        {Object.entries(timezones).map(([code, title]) => {
          return (
            <Select.Item key={code} value={code}>
              <Select.ItemPrefix>
                <Clock className="h-5 w-5 rounded-full object-cover object-center dark:bg-zinc-200" />
              </Select.ItemPrefix>
              <Select.ItemText>{title}</Select.ItemText>
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
}
