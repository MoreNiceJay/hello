import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    background: "black",
    backgroundSize: "100px 100px",
    flex: "1 1 auto",
    width: "100%",
    display: "flex",
    zIndex: "2",
    overflow: "auto",
    position: "relative",
    flexDirection: "column"
  }
}));

const MainBody = props => {
  const classes = useStyles(props);

  return <main className={classes.main}>{props.contents}</main>;
};

export default MainBody;
