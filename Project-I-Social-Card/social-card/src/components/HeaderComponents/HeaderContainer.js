import React from "react";
import "./Header.css";
import { ImageThumbNail } from "./ImageThumbnail";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderContent } from "./HeaderContent";

export const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbNail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};
