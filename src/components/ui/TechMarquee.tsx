import { Box, useTheme } from "@mui/material";

type IconItem = { src: string; alt: string; invertOnDark?: boolean };

const ICONS: IconItem[] = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg", alt: "Vue.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", alt: ".NET Core" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", alt: "C#" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", alt: "VS Code" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg", alt: "Visual Studio" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", alt: "Postman" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js", invertOnDark: true },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", alt: "MySql" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "Postgress" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", alt: "GitHub", invertOnDark: true },
];                    

export function TechMarquee({ speedMs = 50000, gap = 32, size = { xs: 36, sm: 44, md: 52 } }: { speedMs?: number; gap?: number; size?: { xs: number; sm: number; md: number } }) {
    const theme = useTheme();
    const items = [...ICONS, ...ICONS, ...ICONS];

    return (
        <Box
            role="region"
            aria-roledescription="carousel"
            aria-label="Tecnologías"
            tabIndex={-1}
            sx={{
                position: "relative",
                overflow: "hidden",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                maskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                py: 1,
                "@media (prefers-reduced-motion: reduce)": {
                    ".marqueeTrack": { animation: "none" },
                },
                "@keyframes marquee": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.3333%)" },
                },
            }}
        >
            <Box
                className="marqueeTrack"
                sx={{
                    display: "inline-flex",
                    gap: `${gap}px`,
                    width: "max-content",
                    alignItems: "center",
                    animation: `marquee ${speedMs}ms linear infinite`,
                    willChange: "transform",
                    px: 0,
                }}
            >
                {items.map((item, idx) => {
                    const invert =
                        (item as any).invertOnDark && theme.palette.mode === "dark";
                    return (
                        <Box
                            key={`${item.src}-${idx}`}
                            component="img"
                            src={item.src}
                            alt={item.alt}
                            loading={idx < ICONS.length ? "eager" : "lazy"}
                            decoding="sync"
                            fetchPriority={idx < 4 ? "high" as any : undefined}
                            sx={{
                                height: { xs: size.xs, sm: size.sm, md: size.md },
                                filter: invert ? "invert(1)" : "none",
                                opacity: 0.95,
                                transition: "transform 120ms ease, opacity 120ms ease",
                                "&:hover": { transform: "scale(1.06)", opacity: 1 },
                                display: "block",
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}