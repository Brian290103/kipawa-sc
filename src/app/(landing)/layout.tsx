import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Script from "next/script";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"font-body"}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JEWSCBMPG6"
      ></Script>

      <Script id={"google-analytics"}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JEWSCBMPG6');
           
            `}
      </Script>

      {/*<NotificationBar />*/}
      <Navbar />
      {children}

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Layout;
