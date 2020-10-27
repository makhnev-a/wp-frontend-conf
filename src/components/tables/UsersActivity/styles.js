import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles1 = makeStyles((theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

export const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});