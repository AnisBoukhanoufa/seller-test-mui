import { useState } from "react";

const useImageUploader = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleDelete = (image: string) => {
    const updatedFiles = images.filter((element: string) => element !== image);
    setImages(updatedFiles);
  };
  return { images, setImages, handleDelete };
};

export default useImageUploader;
