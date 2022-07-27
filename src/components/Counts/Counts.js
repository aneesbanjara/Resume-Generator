import { Fragment } from "react";

import classes from './Counts.module.css'

const Counts = (props) => {
  return (
    <Fragment>
      <div>
        <p className={classes.count}>{props.countNumber}</p>
        <span className={classes.spans}>{props.countType}</span>
      </div>
    </Fragment>
  );
};

export default Counts;
