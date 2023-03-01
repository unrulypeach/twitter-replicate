import { useLocation } from "react-router-dom";

export const pathWoBackslash = (): string => {
  const location = useLocation().pathname;
  return location.substring(1).charAt(0).toUpperCase() + location.slice(2);
};
