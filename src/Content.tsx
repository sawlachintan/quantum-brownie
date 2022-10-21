import {
    Box,
    Button,
    Chip,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import {
    NUMBERS,
    INGREDIENTS,
    getRandomInt,
    MAX,
    ChipItems,
} from "./assets/constants";
import { motion } from "framer-motion";

export const Content = () => {
    type DIFF_TYPE = {
        name: string;
        diff: number;
    };
    const SUM: number = NUMBERS.reduce((a, b) => a + b, 0);
    const AVERAGE = SUM / NUMBERS.length;

    const meltedButter: DIFF_TYPE =
        INGREDIENTS["melted butter"][getRandomInt(1, MAX, AVERAGE)];
    const cocoaPowder: DIFF_TYPE =
        INGREDIENTS["cocoa powder"][getRandomInt(1, MAX, AVERAGE)];
    const sugar: DIFF_TYPE =
        INGREDIENTS["white sugar"][getRandomInt(1, MAX, AVERAGE)];
    const eggs: DIFF_TYPE = INGREDIENTS["eggs"][getRandomInt(1, MAX, AVERAGE)];
    const vanilla: DIFF_TYPE =
        INGREDIENTS["vanilla extract"][getRandomInt(1, MAX, AVERAGE)];
    const salt: DIFF_TYPE =
        INGREDIENTS["iodized salt"][getRandomInt(1, MAX, AVERAGE)];
    const flour: DIFF_TYPE =
        INGREDIENTS["all purpose flour"][getRandomInt(1, MAX, AVERAGE)];
    const twentyMinutes: DIFF_TYPE =
        INGREDIENTS["21 min"][getRandomInt(1, MAX, AVERAGE)];

    const [items, setItems] = useState({
        vanilla: vanilla.name,
        cocoaPowder: cocoaPowder.name,
        sugar: sugar.name,
        eggs: eggs.name,
        meltedButter: meltedButter.name,
        salt: salt.name,
        flour: flour.name,
        twentyMinutes: twentyMinutes.name,
    });
    const DIFFICULTY = (items: any) => {
        const sum =
            items.vanilla.diff +
            items.cocoaPowder.diff +
            items.sugar.diff +
            items.eggs.diff +
            items.meltedButter.diff +
            items.salt.diff +
            items.flour.diff +
            items.twentyMinutes.diff;
        return Math.round(sum / 8);
    };

    const handleChange = (items: any): string => {
        const num: number = DIFFICULTY(items);

        return num === 1 ? "Easy" : num === 2 ? "Medium" : "Hard";
    };

    const [difficulty, setDifficulty] = useState<string>(
        handleChange({
            vanilla,
            cocoaPowder,
            sugar,
            eggs,
            meltedButter,
            salt,
            flour,
            twentyMinutes,
        })
    );

    const matches = useMediaQuery("(min-width:700px)");

    return (
        <Box width="100vw" sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                spacing={3}
                py={3}
                width={matches ? "65vw" : "100vw"}
            >
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: { duration: 1.25 },
                        translateY: { duration: 1.25 },
                    }}
                >
                    <Stack
                        width={matches ? "100%" : "95vw"}
                        justifyContent={"center"}
                        direction="row"
                        spacing={1}
                        overflow="scroll"
                    >
                        {ChipItems.map((data: string) => {
                            return (
                                <Chip
                                    color="primary"
                                    key={data}
                                    label={data}
                                    variant={
                                        data === "Brownie"
                                            ? "filled"
                                            : "outlined"
                                    }
                                />
                            );
                        })}
                    </Stack>
                </Grid>
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        opacity: { duration: 1.25 },
                        translateY: { duration: 1.25 },
                    }}
                >
                    <Typography textAlign="left" variant="h6">
                        A Quantum Cooking Series
                    </Typography>
                </Grid>
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        opacity: { duration: 1.25 },
                        translateY: { duration: 1.25 },
                    }}
                >
                    <Typography
                        textAlign="left"
                        variant="h1"
                        fontWeight="bold"
                        fontSize="2.8rem"
                    >
                        Quantum Brownie
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction={matches ? "row" : "column"}
                    width="100%"
                    justifyContent="space-around"
                    mt={1}
                    spacing={matches ? 0 : 2}
                >
                    <Grid
                        item
                        component={motion.div}
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            opacity: { duration: 1.25 },
                            translateY: { duration: 1.25 },
                        }}
                    >
                        <Stack direction="column" spacing={-1}>
                            <Typography
                                variant="body1"
                                fontSize="0.95rem"
                                fontWeight="700"
                                fontFamily="EB Garamond"
                                fontStyle="italic"
                                pb={2}
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
                    <Grid
                        item
                        component={motion.div}
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            opacity: { duration: 1.25 },
                            translateY: { duration: 1.25 },
                        }}
                    >
                        <Stack direction="column" spacing={-1}>
                            <Typography
                                variant="body1"
                                fontSize="0.95rem"
                                fontWeight="700"
                                fontFamily="EB Garamond"
                                fontStyle="italic"
                                pb={2}
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
                                Level of difficulty: {difficulty}
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
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        opacity: { duration: 1.25 },
                        translateY: { duration: 1.25 },
                    }}
                    mt={3}
                >
                    <Stack
                        direction="column"
                        width={matches ? "45vw" : "95vw"}
                        spacing={-1}
                    >
                        <Typography
                            variant="body1"
                            fontSize="0.95rem"
                            fontWeight="700"
                            fontFamily="EB Garamond"
                            fontStyle="italic"
                            pb={3}
                        >
                            Recipe
                        </Typography>
                        <Typography
                            fontFamily="Sorts Mill Goudy"
                            variant="subtitle1"
                        >
                            1. Preheat the oven to 350°F. Grease an 8x8 square
                            pan or line it with foil and set aside.
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
                            <span className="underline">{items.sugar}</span> and
                            stir until fully dissolved.
                        </Typography>
                        <Typography
                            fontFamily="Sorts Mill Goudy"
                            variant="subtitle1"
                        >
                            3. Add 2{" "}
                            <span className="underline">{items.eggs}</span> one
                            at a time, then 1 teaspoon{" "}
                            <span className="underline">{items.vanilla}</span>,
                            and stir until well combined.
                        </Typography>
                        <Typography
                            fontFamily="Sorts Mill Goudy"
                            variant="subtitle1"
                        >
                            4. Stir in 1/2 cup{" "}
                            <span className="underline">{items.flour}</span> and
                            1/4 tsp{" "}
                            <span className="underline">{items.salt}</span>{" "}
                            until the{" "}
                            <span className="underline">{items.flour}</span> is
                            thoroughly combined. Be careful not to overmix.
                        </Typography>
                        <Typography
                            fontFamily="Sorts Mill Goudy"
                            variant="subtitle1"
                        >
                            5. Spread in pan and bake for approximately{" "}
                            <span className="underline">
                                {items.twentyMinutes}
                            </span>{" "}
                            or until the center is slightly set. Be careful not
                            to over-bake!
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        opacity: { duration: 1.25 },
                        translateY: { duration: 1.25 },
                    }}
                    mt={3}
                >
                    <Button
                        onClick={() => {
                            setItems({
                                vanilla: vanilla.name,
                                cocoaPowder: cocoaPowder.name,
                                sugar: sugar.name,
                                eggs: eggs.name,
                                meltedButter: meltedButter.name,
                                salt: salt.name,
                                flour: flour.name,
                                twentyMinutes: twentyMinutes.name,
                            });
                            setDifficulty(
                                handleChange({
                                    vanilla,
                                    cocoaPowder,
                                    sugar,
                                    eggs,
                                    meltedButter,
                                    salt,
                                    flour,
                                    twentyMinutes,
                                })
                            );
                        }}
                        variant="outlined"
                        size="large"
                        sx={{ px: 4 }}
                    >
                        Generate More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
