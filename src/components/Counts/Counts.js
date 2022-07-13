import { Fragment } from "react";

import classes from './Counts.module.css'

const Counts = (props) => {
  return (
    <Fragment>
      <div>
        <p className={classes.count}>{props.countNumber}</p>
        <span className={classes.spans}>Followers</span>
      </div>
    </Fragment>
  );
};

export default Counts;
