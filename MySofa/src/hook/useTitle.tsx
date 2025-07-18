import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    if (titleElement) {
      titleElement.innerText = title;
    }
  }, [title]);
};

export default useTitle;
