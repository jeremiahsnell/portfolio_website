import React from "react";
import { Link, Tooltip, Zoom } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
    svg: {
        width: "80px",
        height: "auto",
        position: "absolute",
        top: theme.spacing(6),
        left: theme.spacing(6),
        borderRadius: "0%",
    },
}));

export const LogoLink = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title={Resume.basics.name}
            placement="right"
            TransitionComponent={Zoom}
        >
            <Link
                variant="h6"
                href={Resume.basics.url}
                underline="none"
                color="inherit"
                noWrap
                className={classes.svg}
            >
                <Logo />
            </Link>
        </Tooltip>
    );
};
