import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const current = i18n.resolvedLanguage || i18n.language;
    const next = current === "es" ? "en" : "es";

    const flags: Record<string, string> = {
        es: "🇪🇸",
        en: "🇺🇸",
    };

    return (
        <IconButton
            onClick={() => i18n.changeLanguage(next)}
            sx={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: "1.5rem",
                color: "inherit"
            }}
        >
            {flags[current]}
        </IconButton>
    );
}