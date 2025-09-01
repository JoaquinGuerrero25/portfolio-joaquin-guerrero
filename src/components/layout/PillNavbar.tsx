import { Box, Button, Card, Divider, IconButton } from "@mui/material";
import { AccountCircleRounded, ContactsRounded, HomeRounded, WorkRounded } from "@mui/icons-material";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

export default function PillNavbar() {
    const { t } = useTranslation();

    return (
        <Card
            sx={(theme) => ({
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
                boxShadow: theme.shadows[4],
                border: "1px solid",
                borderColor: theme.palette.divider,
            })}
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
        </Card>
    );
}