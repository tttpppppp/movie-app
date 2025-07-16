import type React from "react";
import Header from "../../components/Header";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutClient;
