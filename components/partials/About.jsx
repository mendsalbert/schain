import React from "react";
import {
  AdjustmentsIcon,
  AnnotationIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardListIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/outline";
function Terms() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-white pointer-events-none"
        aria-hidden="true"
      ></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto pt-12 px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto space-y-4  pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-2xl text-center">About schain</h2>

            <p>Welcome to Schain!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
