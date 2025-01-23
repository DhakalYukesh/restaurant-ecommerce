"use client";
import Footer from "@/components/generic/footer";
import Navbar from "@/components/generic/navbar";
import store from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </Provider>
    </div>
  );
};

export default layout;
