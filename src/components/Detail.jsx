import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext } from "@/contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      Display activated theme message here (EN or TH)
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
      {theme.name === "light"
        ? lang.detail.lightActivated
        : lang.detail.darkActivated}
    </p>
  );
};