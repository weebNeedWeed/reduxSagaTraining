import { createStyles, makeStyles } from "@material-ui/styles";

const styles = (theme) =>
  createStyles({
    modal: {
      position: "absolute",
      width: "50%",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    header: {
      height: "4rem",
      backgroundColor: "orangered",
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "space-between",
    },
    closeIcon: {
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  });

const useStyles = makeStyles(styles);

export default useStyles;
