import React from "react";
import { Compare } from "@/components/ui/compare";
import Before from "../../public/compressed-images/before.jpg"
import After from "../../public/compressed-images/after.jpg"

export function CompareDemo() {
  return (
        <div className=" flex items-center justify-center">
      <div className="w-full mx-auto">
        <Compare
          firstImage={Before}
        secondImage="https://media.istockphoto.com/id/638467106/photo/abstract-business-interior-background-blue-window-double-exposure.jpg?s=2048x2048&w=is&k=20&c=PlmYlwt7AD1KYkG3E09iayV5PYnDE1Vc7Ua0yKehHRM="
          className="mx-auto"
          slideMode="hover"
          showHandlebar={true}
        />
      </div>
    </div>
  );
}


  