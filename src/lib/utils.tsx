import { CardRole, Language } from "../types/types";
import { WORD_BANK_EN, WORD_BANK_CZE } from "../WordBank";


export const mapRoleToStyles = (role: CardRole) => {
    const styles = {
        blue: { backgroundColor: "#7acaff" },
        red: { backgroundColor: "#ff5d56" },
        black: { backgroundColor: "black", color: "white" },
        neutral: { backgroundColor: "#efefef" },
    };
    return styles[role];
};

export const mapLanguageToWordBank: { [key in Language]: Array<string> } = {
    EN: WORD_BANK_EN,
    CZE: WORD_BANK_CZE,
}

export const mapRoleToSign: { [key in CardRole]: string } = {
    black: "💀",
    red: "○",
    neutral: "",
    blue: "○",
};