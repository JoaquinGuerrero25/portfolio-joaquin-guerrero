import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TechMarquee } from "../../components/ui/TechMarquee";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                paddingTop: '200px',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    textAlign: 'center',
                    gap: 2,
                    mb: 12,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography
                        component='h3'
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                    >
                        {t('home.hero.greeting')}
                    </Typography>
                    <Typography
                        component='h3'
                        variant="h5"
                        fontWeight={600}
                        color="text.primary"
                        sx={{
                            fontSize: { xs: '1.10rem', sm: '1.5rem' },
                            lineHeight: 1.2,
                        }}
                    >
                        {t('home.hero.name')}
                    </Typography>
                </Box>
                <Typography
                    component='h1'
                    variant="h2"
                    fontWeight={600}
                    sx={{
                        fontSize: {
                            xs: 'clamp(1.80rem, 6vw, 2rem)',
                            md: 'clamp(2.25rem, 4vw, 3rem)',
                        },
                    }}
                >
                    {t('home.hero.role')}
                </Typography>
                <Typography
                    component='h4'
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.20rem' },
                        maxWidth: { xs: '100%', sm: 720, md: 800 },
                    }}
                >
                    {t('home.hero.description')}
                </Typography>
            </Box>
            <TechMarquee />
        </Box>
    );
};