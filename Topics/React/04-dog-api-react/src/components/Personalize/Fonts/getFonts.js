
import fontsOptions from "./fontsOptions";

export default async (persoFont, dispatch) => {
   const fonts = fontsOptions.map(font => ( { name: font.name, class: font.class, isCurrent: false } ));

   if (persoFont) {
      fonts.forEach(font => font.name === persoFont ? font.isCurrent = true : font.isCurrent = false);
   } else {
      fonts[0].isCurrent = true;
      dispatch({ type: "SET_FONT", newFont: fonts[0].name });
      dispatch({ type: "SET_FONT_CLASS", newFontClass: fonts[0].class });
   }

   return fonts;
};