import React, {ReactNode} from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const GreenTextTypography = withStyles({
  root: {
    color: '#037838',
    textAlign: 'center'
  }
})(Typography);

export const Title = ({children}) => {
  return (
    <GreenTextTypography variant='h5' color='primary' gutterBottom>
      {children}
    </GreenTextTypography>
  );
};