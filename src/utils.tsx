import { CardRole } from "./types";

export const mapRoleToStyles = (role: CardRole) => {
  const styles = {
    blue: { backgroundColor: "#7acaff" },
    red: { backgroundColor: "#ff5d56" },
    black: { backgroundColor: "black", color: "white" },
    neutral: { backgroundColor: "#d4d4d4" },
  };
  return styles[role];
};
