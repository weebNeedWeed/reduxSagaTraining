import { makeStyles, createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    taskItem: {
      "&:not(:last-child)": {
        marginBottom: "1rem",
      },
    },
  });
const useStyles = makeStyles(styles);

export default useStyles;
