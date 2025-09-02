import { Box, Button, Card, Divider, IconButton, useMediaQuery } from "@mui/material";
import { AccountCircleRounded, ContactsRounded, HomeRounded, WorkRounded } from "@mui/icons-material";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

export default function PillNavbar() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery("(max-width:1020px)");
    
    return (
        <Card
            sx={(theme) => ({
                position: "fixed",
                top: 16,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "1.5rem",
                display: "flex",
                alignItems: "center",
                px: "0.35rem",
                py: "0.15rem",
                boxShadow: theme.shadows[4],
                border: "1px solid",
                borderColor: theme.palette.divider,
            })}
        >
            <Box
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 2,
                    gap: "12px",
                }}
            >
                <IconButton sx={{ color: "text.secondary" }}>
                    <HomeRounded fontSize="small" />
                </IconButton>

                <Divider orientation="vertical" variant="middle" flexItem aria-hidden="true" />

                {isMobile ? (
                    <IconButton sx={{ color: "text.secondary" }}>
                        <AccountCircleRounded fontSize="small" />
                    </IconButton>
                ) : (
                    <Button startIcon={<AccountCircleRounded fontSize="small" />} sx={{ textTransform: "none", borderRadius: "1.25rem", color: "text.secondary" }}>
                        {t("navbar.about")}
                    </Button>
                )}

                {isMobile ? (
                    <IconButton sx={{ color: "text.secondary" }}>
                        <WorkRounded fontSize="small" />
                    </IconButton>
                ) : (
                    <Button startIcon={<WorkRounded fontSize="small" />} sx={{ textTransform: "none", borderRadius: "1.25rem", color: "text.secondary" }}>
                        {t("navbar.projects")}
                    </Button>
                )}

                {isMobile ? (
                    <IconButton sx={{ color: "text.secondary" }}>
                        <ContactsRounded fontSize="small" />
                    </IconButton>
                ) : (
                    <Button startIcon={<ContactsRounded fontSize="small" />} sx={{ textTransform: "none", borderRadius: "1.25rem", color: "text.secondary" }}>
                        {t("navbar.contact")}
                    </Button>
                )}

                <Divider orientation="vertical" variant="middle" flexItem aria-hidden="true" />

                <LanguageSwitcher />
                <ThemeSwitcher />
            </Box>
        </Card>
    );
}