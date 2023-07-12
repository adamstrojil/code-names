import { CardRole } from "../types/types";

export const mapRoleToStyles = (role: CardRole) => {
  const styles = {
    blue: { backgroundColor: "#7acaff" },
    red: { backgroundColor: "#ff5d56" },
    black: { backgroundColor: "black", color: "white" },
    neutral: { backgroundColor: "#efefef" },
  };
  return styles[role];
};

export const mapRoleToSign: { [key in CardRole]: string } = {
  black: "💀",
  red: "○",
  neutral: "",
  blue: "○",
};

export const parseRolesFromCSVString = (text: string): Array<CardRole> => {
  return text.split(",") as Array<CardRole>;
};