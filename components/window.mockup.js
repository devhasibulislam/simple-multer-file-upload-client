import React from "react";

const Window = ({ children }) => {
  return (
    <section>
      <div className="mockup-window border-4 border-primary bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          {children}
        </div>
      </div>
    </section>
  );
};
export default Window;
