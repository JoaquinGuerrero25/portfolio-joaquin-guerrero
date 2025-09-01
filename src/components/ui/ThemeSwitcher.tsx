import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { LightModeRounded, NightlightRoundRounded } from "@mui/icons-material";

export function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();

    if (!mode) return null;

    const isDark = mode === "dark";

    return (
        <IconButton
            onClick={() => setMode(isDark ? "light" : "dark")}
        >
            {isDark ? <LightModeRounded /> : <NightlightRoundRounded />}
        </IconButton>
    );
}