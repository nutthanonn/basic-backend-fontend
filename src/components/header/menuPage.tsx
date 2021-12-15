import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkText: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "#FC5185",
    },
  },
  boxItem: {
    display: "flex",
    flexDirection: "column",
  },
});
const item: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MenuPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.boxItem}>
        <Typography component="a" className={classes.linkText} href="/home">
          Homepage
        </Typography>
        <Typography component="a" className={classes.linkText} href="/">
          testpage
        </Typography>
        {item.map((item) => {
          return (
            <Typography className={classes.linkText}>
              page na ja eiei eiei{item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default MenuPage;
