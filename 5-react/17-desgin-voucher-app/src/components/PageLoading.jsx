import React from "react";

const PageLoading = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="h-1.5 w-full bg-blue-200 overflow-hidden">
        <div className="progress-loading w-full h-full bg-blue-500 left-right" />
      </div>
    </div>
  );
};

export default PageLoading;
