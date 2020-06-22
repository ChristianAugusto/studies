
import styled from "styled-components";

export default styled.main`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .ch-tutorial {
    &-title {
      font-family: "Montserrat", sans-serif;
      font-size: 19px;
      font-weight: 900;
      text-align: center;
      line-height: 25px;

      @media only screen and (min-width: 1100px) {
        font-size: 22px;
      }

      @media only screen and (min-width: 601px) {
        font-size: 25px;
      }

      &--wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    &-text {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      font-weight: normal;
      text-align: center;
      line-height: 20px;

      @media only screen and (min-width: 601px) {
        font-size: 19px;
      }

      &--wrapper {
        margin-top: 10px;
      }
    }
  }

  .ch-select {
    position: relative;
    min-width: 240px;
    min-height: 30px;
    margin-top: 10px;

    &:not(.is--open) {
      .ch-select--options {
        max-height: 0;
        visibility: hidden;
      }
    }

    &.is--open {
      .ch-select--options {
        max-height: 125px;
        visibility: visible;
        transition: max-height 0.4s ease-out;

        @media only screen and (min-width: 601px) {
          max-height: 180px;
        }
      }
    }

    li {
      min-height: 25px;
      box-sizing: border-box;
      padding: 5px 5px 5px 10px;
      font-family: "Montserrat", sans-serif;
      font-size: 13px;
      font-weight: normal;
      text-transform: uppercase;
      transition: all 0.15s linear;
      cursor: pointer;

      @media only screen and (min-width: 601px) {
        font-size: 15px;
        min-height: 35px;
        padding: 10px 5px 10px 10px;
      }

      &.is--current {
        color: #ffffff;
        background-color: #73d4fa;
      }

      &:hover:not(.is--current) {
        background-color: rgba(115, 212, 250, 0.35);
      }

      :not(:last-child) {
        border-bottom: 1px solid #00b7ff;
      }
    }


    &--visor {
      width: 100%;
      min-height: 30px;
      box-sizing: border-box;
      border: 1px solid #00b7ff;
      padding: 0 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      cursor: pointer;

      @media only screen and (min-width: 601px) {
        min-height: 40px;
      }

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: normal;
        text-align: center;
        font-weight: 900;
        line-height: 20px;
        text-transform: uppercase;

        @media only screen and (min-width: 601px) {
          font-size: 15px;
        }
      }

      svg {
        width: 20px;
        fill: #a3a3a3;
      }
    }

    &--options {
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      border: 1px solid #00b7ff;
      overflow-x: hidden;
      overflow-y: scroll;
      transition: max-height 0.4s ease-out, visibility 0s 0.4s;

      @media only screen and (min-width: 601px) {
        top: 40px;
      }

      &::-webkit-scrollbar { 
        width: 2px;
      }
      &::-webkit-scrollbar-button { 
        display: none;
      }
      &::-webkit-scrollbar-track { 
        width: 2px;
        background-color: #ffffff;
      }
      &::-webkit-scrollbar-track-piece { 
        display: none;
      }
      &::-webkit-scrollbar-thumb { 
        width: 2px;
        background-color: #00b7ff;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-corner { 
        display: none;
      }
      &::-webkit-resizer { 
        display: none;
      }
    }
  }
`;