import React, { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Brightness4, Brightness7 } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "absolute !important",
        bottom: theme.spacing(6),
        right: theme.spacing(6),
        height: "2.5rem",
        width: "2.5rem",
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(CustomThemeContext);
    const classes = useStyles();

    return (
        <Tooltip
            title={"Toggle theme"}
            placement="right"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label={"Toggle theme"}
                className={classes.iconButton}
                size="large">
                {theme === "light" ? (
                    <Brightness4 className={classes.icon} />
                ) : (
                    <Brightness7 className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};
