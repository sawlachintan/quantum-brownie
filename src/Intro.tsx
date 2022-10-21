import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
    handleIntro: any;
};

export const Intro: FC<Props> = ({ handleIntro }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                alignItems: "center",
            }}
            width="100vw"
            height="100vh"
        >
            <Box
                height="50vh"
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Stack
                    direction="column"
                    alignItems={"center"}
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ opacity: 1.25, translateY: 1.25 }}
                >
                    <Typography
                        fontFamily={"Snell Roundhand "}
                        color="red"
                        variant="h4"
                    >
                        The
                    </Typography>
                    <Typography color="red" variant="h3">
                        Quantum Cooking
                    </Typography>
                    <Typography
                        fontFamily={"Snell Roundhand "}
                        color="red"
                        variant="h4"
                    >
                        Recipe Collection
                    </Typography>
                </Stack>

                <Button
                    onClick={handleIntro}
                    variant="outlined"
                    sx={{ px: 4 }}
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: 1.25,
                        translateY: 1.25,
                        delay: 0.05,
                    }}
                >
                    Enter
                </Button>
            </Box>
        </Box>
    );
};
