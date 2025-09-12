import React from "react";

function Page({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="page">{children}</div>
    </>
  );
}

export default Page;
