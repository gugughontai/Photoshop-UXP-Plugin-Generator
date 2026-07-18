import { create } from "zustand";

type ImageStore = {
  image: string | null;
  fileName: string;
  fileSize: string;

  setImage: (
    image: string,
    fileName: string,
    fileSize: string
  ) => void;

  clearImage: () => void;
};

export const useImageStore = create<ImageStore>((set) => ({
  image: null,
  fileName: "",
  fileSize: "",

  setImage: (image, fileName, fileSize) =>
    set({
      image,
      fileName,
      fileSize,
    }),

  clearImage: () =>
    set({
      image: null,
      fileName: "",
      fileSize: "",
    }),
}));