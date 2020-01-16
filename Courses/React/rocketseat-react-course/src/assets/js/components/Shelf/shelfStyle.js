
export default `
   width: 100%;
   padding: 0 5%;
   margin: 15px 0;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;

   .product-list {
      width: 100%
   }

   .product-item {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 5px;
      padding: 20px;
      
      &:not(:last-child) {
         margin-bottom: 20px;
      }

      p {
         font-size: 16px;
         line-height: 24px;
         color: #999999;
         margin-top: 5px;
      }

      a {
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 42px;
         border-radius: 5px;
         border: 2px solid #da552f;
         background: transparent;
         margin-top: 10px;
         font-size: 16px;
         font-weight: 900;
         color: #da552f;

         &:focus {
            background: #da552f;
            color: #ffffff;
         }
         &:hover {
            transition: all 0.25s;
            background: #da552f;
            color: #ffffff;
         }
      }
   }

   .pagination {
      width: 100%;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }
`;