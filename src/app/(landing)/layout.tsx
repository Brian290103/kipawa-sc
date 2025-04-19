import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/*<NotificationBar />*/}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
