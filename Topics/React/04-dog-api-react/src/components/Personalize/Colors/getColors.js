
import colorsOptions from "./colorsOptions";

export default async (persoColor, dispatch) => {
   const colors = colorsOptions.map(color => ( { name: color.name, class: color.class, isCurrent: false } ));

   if (persoColor) {
      colors.forEach(color => color.name === persoColor ? color.isCurrent = true : color.isCurrent = false);
   } else {
      colors[0].isCurrent = true;
      dispatch({ type: "SET_COLOR", newColor: colors[0].name });
      dispatch({ type: "SET_COLOR_CLASS", newColorClass: colors[0].class });
   }

   return colors;
};