import { makeStyles, createStyles } from "@material-ui/styles";
import theme from "./../../commons/theme/index";

let styles = () => {
	return createStyles({});
};

let options = {
	defaultTheme: theme,
};

const useStyles = makeStyles(styles, options);

export default useStyles;
