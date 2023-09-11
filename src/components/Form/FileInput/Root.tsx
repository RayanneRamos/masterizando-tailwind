/* eslint-disable prettier/prettier */
"use client";

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

export type RootProps = ComponentProps<"div">;

type FileInputContexType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContexType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
