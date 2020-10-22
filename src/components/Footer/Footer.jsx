import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export const Footer = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Footer @'}
      <Link color='inherit' href='https://material-ui.com'>You website</Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};