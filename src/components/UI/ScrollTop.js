// import React from "react";
// import { Fab } from "@material-ui/core";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { makeStyles } from "@material-ui/core/styles";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";


// const useStyles = makeStyles((theme) => ({
//     root: {
//       position: "fixed",
//       bottom: theme.spacing(2),
//       right: theme.spacing(2),
//     },
//   }));
// const ScrollTop = (props) => {
//   const { children, window } = props;
//   const classes = useStyles();
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });
//   return (
//     <Fab color="secondary" size="small" aria-label="scroll back to top">
//       <KeyboardArrowUpIcon />
//     </Fab>
//   );
// };

// export default ScrollTop;
