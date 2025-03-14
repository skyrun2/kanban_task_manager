import assetsData from "./assetsData";


 export function colorTheme (  theme : "light"|"dark") {
   return{
      body  : theme == "light" ? "bodyLight" : "bodyDark",
      color  : theme == "light" ? "dark" : "light",  
      line : theme == "light" ? "lineLight" : "lineDark",
      logo : theme == "light" ? assetsData.darkLogo : assetsData.lightLogo,
      main  : theme == "light" ? "mainLight" : "mainDark",
      moreHover  : theme == "light" ? "moreHoverLight" : "moreHoverDark",            
   } 

}



export default colorTheme;
    
    

 