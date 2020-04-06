import { makeStyles, createStyles } from "@material-ui/styles";

const styles = () =>
	createStyles({
		cardActions: {
			display: "flex",
			justifyContent: "flex-end",
		},
	});
const useStyles = makeStyles(styles);

export default useStyles;
