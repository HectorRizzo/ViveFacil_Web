import { useContext } from "react";
import SettingsContext from "./context";


const  useSettings = () => {
   const context = useContext(SettingsContext);
   console.log(context);

   return context;
}
export default useSettings;