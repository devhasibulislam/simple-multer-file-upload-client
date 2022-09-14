import React from "react";

const Phone = ({ children }) => {
  return (
    <section className="flex lg:mb-0 md:mb-0 mb-4">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Phone;
