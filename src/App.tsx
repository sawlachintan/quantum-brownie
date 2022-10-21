import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Intro } from "./Intro";
import { Content } from "./Content";
function App() {
    const [intro, setIntro] = useState<Boolean>(true);
    const handleIntro = () => setIntro(false);

    return (
        <ThemeProvider
            theme={createTheme({
                typography: {
                    fontFamily: "Sorts Mill Goudy, EB Garamond",
                    button: {
                        textTransform: "capitalize",
                        fontFamily: "Sorts Mill Goudy",
                    },
                    allVariants: {
                        color: "#FF0000",
                    },
                },
                palette: {
                    primary: {
                        main: "#FF0000",
                    },
                },
                shape: {
                    borderRadius: 25,
                },
            })}
        >
            <Box
                width="100vw"
                sx={{ display: "flex", justifyContent: "center" }}
            >
                {intro ? <Intro handleIntro={handleIntro} /> : <Content />}
            </Box>
        </ThemeProvider>
    );
}

export default App;
