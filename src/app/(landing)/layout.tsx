import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/*<NotificationBar />*/}
      <Navbar />
      {children}

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Layout;
