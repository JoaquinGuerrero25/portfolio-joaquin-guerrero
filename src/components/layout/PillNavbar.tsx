import { Box, Button, Divider, IconButton } from "@mui/material";
import { AccountCircleRounded, ContactsRounded, HomeRounded, WorkRounded } from "@mui/icons-material";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

// const navItems = [
//     { label: "Home", to: "/" },
//     { label: "About", to: "/about" },
//     { label: "Projects", to: "/projects" },
//     { label: "Contact", to: "/contact" },
// ];

export default function PillNavbar() {
    const { t } = useTranslation();
    // const location = useLocation();

    return (
        <Box
            sx={{
                position: "fixed",
                top: 16,
                left: "50%",
                transform: "translateX(-50%)",
                height: "52px",
                borderRadius: "1.5rem",
                display: "flex",
                alignItems: "center",
                px: "0.35rem",
                py: "0.35rem",
                border: '1px solid #95959526',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12), 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.08);'
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: 2,
                    gap: '12px',
                }}
            >
                <IconButton>
                    <HomeRounded />
                </IconButton>

                <Divider orientation="vertical" variant="middle" flexItem aria-hidden="true" />
                <Button startIcon={<AccountCircleRounded />} sx={{ textTransform: 'none', borderRadius: '1.25rem' }}>
                    {t('navbar.about')}
                </Button>
                <Button startIcon={<WorkRounded />} sx={{ textTransform: 'none', borderRadius: '1.25rem' }}>
                    {t('navbar.projects')}
                </Button>
                <Button startIcon={<ContactsRounded />} sx={{ textTransform: 'none', borderRadius: '1.25rem' }}>
                    {t('navbar.contact')}
                </Button>
                <Divider orientation="vertical" variant="middle" flexItem aria-hidden="true" />
                <LanguageSwitcher />
                <ThemeSwitcher />
            </Box>
        </Box>
    );
}