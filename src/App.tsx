import {
    Box,
    Button,
    createTheme,
    Grid,
    Stack,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import { NUMBERS, INGREDIENTS, getRandomInt } from "./assets/constants";

function App() {
    const SUM: number = NUMBERS.reduce((a, b) => a + b, 0);
    const AVERAGE = SUM / NUMBERS.length;

    const meltedButter: string =
        INGREDIENTS["melted butter"][getRandomInt(1, 9, AVERAGE)];
    const cocoaPowder: string =
        INGREDIENTS["cocoa powder"][getRandomInt(1, 9, AVERAGE)];
    const sugar: string =
        INGREDIENTS["white sugar"][getRandomInt(1, 9, AVERAGE)];
    const eggs: string = INGREDIENTS["eggs"][getRandomInt(1, 9, AVERAGE)];
    const vanilla: string =
        INGREDIENTS["vanilla extract"][getRandomInt(1, 9, AVERAGE)];
    const salt: string =
        INGREDIENTS["iodized salt"][getRandomInt(1, 9, AVERAGE)];
    const flour: string =
        INGREDIENTS["all purpose flour"][getRandomInt(1, 9, AVERAGE)];
    const twentyMinutes: string =
        INGREDIENTS["21 min"][getRandomInt(1, 9, AVERAGE)];

    const [items, setItems] = useState({
        vanilla: vanilla,
        cocoaPowder: cocoaPowder,
        sugar: sugar,
        eggs: eggs,
        meltedButter: meltedButter,
        salt: salt,
        flour: flour,
        twentyMinutes: twentyMinutes,
    });

    const matches = useMediaQuery("(min-width:600px)");

    console.log({
        vanilla: vanilla,
        cocoaPowder: cocoaPowder,
        sugar: sugar,
        eggs: eggs,
        meltedButter: meltedButter,
        salt: salt,
        flour: flour,
        twentyMinutes: twentyMinutes,
    });

    return (
        <ThemeProvider
            theme={createTheme({
                typography: {
                    fontFamily: "EB Garamond, Sorts Mill Goudy",
                },
                palette: {
                    primary: {
                        main: "#000",
                    },
                },
            })}
        >
            <Box
                width="100vw"
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={3}
                    py={3}
                    width={matches ? "65vw" : "100vw"}
                >
                    <Grid item>
                        <Typography textAlign="left" variant="h6">
                            A Quantum Cooking Series
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            textAlign="left"
                            variant="h1"
                            fontWeight="bold"
                            fontSize="4rem"
                        >
                            Quantum Brownie
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        width="100%"
                        justifyContent="space-around"
                        mt={5}
                    >
                        <Grid item>
                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    fontSize="1.25rem"
                                    fontWeight="700"
                                    fontFamily="Sorts Mill Goudy"
                                >
                                    Ingredients
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.vanilla}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.cocoaPowder}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.sugar}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.eggs}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.meltedButter}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.salt}
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    {items.flour}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    fontSize="1.25rem"
                                    fontWeight="700"
                                    fontFamily="Sorts Mill Goudy"
                                >
                                    Details
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    Portion Size: 2 people
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    Level of difficulty: Easy
                                </Typography>
                                <Typography
                                    fontFamily="Sorts Mill Goudy"
                                    variant="subtitle1"
                                >
                                    Total prepartion time: {items.twentyMinutes}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item mt={9}>
                        <Stack direction="column">
                            <Typography
                                variant="body1"
                                fontSize="1.25rem"
                                fontWeight="700"
                                fontFamily="Sorts Mill Goudy"
                            >
                                Recipe
                            </Typography>
                            <Typography
                                fontFamily="Sorts Mill Goudy"
                                variant="subtitle1"
                            >
                                1. Preheat the oven to 350°F. Grease an 8x8
                                square pan or line it with foil and set aside.
                            </Typography>
                            <Typography
                                fontFamily="Sorts Mill Goudy"
                                variant="subtitle1"
                            >
                                2. In a medium bowl, combine 1/2 cup{" "}
                                <span className="underline">
                                    {items.meltedButter}
                                </span>
                                , 1/2 cup{" "}
                                <span className="underline">
                                    {items.cocoaPowder}
                                </span>
                                , and 1 cup{" "}
                                <span className="underline">{items.sugar}</span>{" "}
                                and stir until fully dissolved.
                            </Typography>
                            <Typography
                                fontFamily="Sorts Mill Goudy"
                                variant="subtitle1"
                            >
                                3. Add 2{" "}
                                <span className="underline">{items.eggs}</span>{" "}
                                one at a time, then 1 teaspoon{" "}
                                <span className="underline">
                                    {items.vanilla}
                                </span>
                                , and stir until well combined.
                            </Typography>
                            <Typography
                                fontFamily="Sorts Mill Goudy"
                                variant="subtitle1"
                            >
                                4. Stir in 1/2 cup{" "}
                                <span className="underline">{items.flour}</span>{" "}
                                and 1/4 tsp{" "}
                                <span className="underline">{items.salt}</span>{" "}
                                until the{" "}
                                <span className="underline">{items.flour}</span>{" "}
                                is thoroughly combined. Be careful not to
                                overmix.
                            </Typography>
                            <Typography
                                fontFamily="Sorts Mill Goudy"
                                variant="subtitle1"
                            >
                                5. Spread in pan and bake for approximately{" "}
                                <span className="underline">
                                    {items.twentyMinutes}
                                </span>{" "}
                                or until the center is slightly set. Be careful
                                not to over-bake!
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item mt={8}>
                        <Button
                            onClick={() =>
                                setItems({
                                    vanilla: vanilla,
                                    cocoaPowder: cocoaPowder,
                                    sugar: sugar,
                                    eggs: eggs,
                                    meltedButter: meltedButter,
                                    salt: salt,
                                    flour: flour,
                                    twentyMinutes: twentyMinutes,
                                })
                            }
                            variant="contained"
                            size="large"
                        >
                            Generate More
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default App;
