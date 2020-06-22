
import React, { useState } from "react";
import { useSelector } from "react-redux";

import PreviewWrapper from "./style";
import {ReactComponent as CloseLightboxSvg} from "../../../svgs/close-lightbox.svg";


export default props => {
  const colorClass = useSelector(state => state.personalization.colorClass);
  const fontClass = useSelector(state => state.personalization.fontClass);
  const dogName = useSelector(state => state.personalization.dogName);
  const dogImage = useSelector(state => state.personalization.dogImage);
  const dogBreed = useSelector(state => state.personalization.dogBreed);

  const [previewIsOpen, setPreviewIsOpen] = useState(false);

  const openLightbox = () => {
    setPreviewIsOpen(true);
  }

  const closeLightbox = () => {
    setPreviewIsOpen(false);
  }


  return (
    <PreviewWrapper className={previewIsOpen ? "is--open" : ""}>
      <div className="ch-personalize--preview--overlay" onClick={closeLightbox}></div>
      <div className="ch-personalize--preview">
        <div className="ch-personalize--preview--wrapper">
          <div className="ch-personalize--preview-close">
            <button className="ch-personalize--preview-close-button" onClick={closeLightbox}>
              <CloseLightboxSvg />
            </button>
          </div>
          <div className="ch-personalize--preview--dog-image-name">
            <div className="ch-personalize--preview--dog-name">
              <p className={`${colorClass} ${fontClass}`}>{dogName}</p>
            </div>
            <img src={dogImage} alt={`${dogBreed} ${dogName}`} className="ch-personalize--preview--dog-image" />
          </div>
          <div className="ch-personalize--preview--dog-breed">
            <p>{dogBreed}</p>
          </div>
        </div>
      </div>
      <button className="ch-personalize--preview--button" onClick={openLightbox}>Preview</button>
    </PreviewWrapper>
  );
}