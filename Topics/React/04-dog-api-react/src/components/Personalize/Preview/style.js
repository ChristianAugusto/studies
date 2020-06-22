
import styled from "styled-components";

export default styled.aside`

  &:not(.is--open) {
    @media only screen and (max-width: 1099px) {
      .ch-personalize--preview {
        display: none;

        &--overlay {
          display: none;
        }
      }
    }
  }

  .ch-personalize--preview {

    &-close {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      @media only screen and (min-width: 1100px) {
        display: none;
      }

      &-button {
        width: 30px;
        height: 26px;
        cursor: pointer;

        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    &--dog-image-name {
      position: relative;
      overflow: hidden;
      margin-top: 10px;
    }

    &--dog-name {
      width: 100%;
      position: absolute;
      top: 5px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 14px;
        font-weight: normal;
        line-height: 16px;
        text-align: center;

        @media only screen and (min-width: 601px) {
          font-size: 16px;
        }
        @media only screen and (min-width: 1100px) {
          font-size: 18px;
        }

        &.color-white {
          color: #ffffff; 
        }
        &.color-black {
          color: #000000;
        }
        &.color-red {
          color: #ff0000; 
        }
        &.color-blue {
          color: #003cff; 
        }
        &.color-green {
          color: #027208; 
        }

        &.font-playfairdisplay {
          font-family: "Playfair Display", serif;
        }
        &.font-lora {
          font-family: "Lora", serif;
        }
        &.font-roboto {
          font-family: "Roboto", sans-serif;
        }
        &.font-cute {
          font-family: "Cute Font", cursive;
        }
        &.font-pacifico {
          font-family: "Pacifico", cursive;
        }
      }
    }

    &--dog-image {
      width: 100%;

      @media only screen and (min-width: 1100px) {
        max-width: 425px;
      }
    }

    &--dog-breed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 900;
        line-height: 16px;
        text-transform: uppercase;
        color: #000000;

        @media only screen and (min-width: 601px) {
          font-size: 16px;
        }
        @media only screen and (min-width: 1100px) {
          font-size: 18px;
        }
      }
    }

    &--overlay {
      @media only screen and (max-width: 1099px) {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 102;
      }
      @media only screen and (min-width: 1100px) {
        display: none;
      }
    }

    &--wrapper {

      @media only screen and (max-width: 1099px) {
        background: #ffffff;
        border-radius: 5px;
        position: fixed;
        width: 90vw;
        max-height: 350px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 10px;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 103;
      }
    }
  }

  .ch-personalize--preview--button {
    position: fixed;
    bottom: calc(2.5% + 10px);
    right: 11.5%;
    box-sizing: border-box;
    padding: 5px 10px;
    background: #42f58a;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    z-index: 101;

    @media only screen and (min-width: 1100px) {
      display: none;
    }
  }
`;