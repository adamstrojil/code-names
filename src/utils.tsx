import { CardRole } from "./types";

export const mapRoleToStyles = (role: CardRole) => {
    const styles =
     {
        blue: {backgroundColor: "#57bdffcf"},
        red: {backgroundColor: "#FF0000BB"},
        black: {backgroundColor: "black"},
        neutral: {backgroundColor: "#00000033"},
    }
    return styles[role]
}