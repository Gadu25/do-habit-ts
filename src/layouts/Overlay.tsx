import React from "react";

function Overlay ({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="overlay-container">{children}</div>
    </>
  )
}

export default Overlay;