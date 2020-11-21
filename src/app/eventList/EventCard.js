import React from "react";
import { makeStyles } from "@material-ui/styles";
import { MdNavigateNext } from "react-icons/md";

const useStyles = makeStyles(theme => ({
  container: {
    left: "15px",
    right: "15px",
    height: "100px",
    backgroundColor: theme.backgroundColor,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "15px"
  },
  aTag: {
    textDecoration: "none"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
    pointerEvents: "none"
  },
  title: {
    marginTop: "5px",

    fontSize: "12px",
    fontFamily: "sans-serif",
    color: "black"
  },

  description: {
    marginTop: "5px",
    fontSize: "16px",
    fontFamily: "sans-serif",
    color: "white"
  },

  image: {
    marginRight: "30px",
    color: "white",
    fontSize: "20px"
  }
}));

const EventCard = props => {
  const classes = useStyles(props);

  return (
    <>
      <a className={classes.aTag} href={props.address}>
        {/* <div className={classes.mainCardBackground}> */}
        <div
          className={classes.container}
          style={{ backgroundColor: "#2A2A2A" }}
        >
          <div className={classes.textContainer}>
            <span className={classes.title} style={{ color: "#B9B9B9" }}>
              {props.title}
            </span>
            <span className={classes.description} style={{ color: "white" }}>
              {props.description}
            </span>
            <span className="EventCard_explanation">{props.explanation}</span>
          </div>
          <div className={classes.image}>
            <MdNavigateNext />
          </div>
        </div>
      </a>
      {/* </div> */}
    </>
  );
};

export default EventCard;
