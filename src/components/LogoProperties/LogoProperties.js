import { Fragment } from "react"

import classes from './LogoProperties.module.css'

const LogoProperties = (props) => {
  return(
    <Fragment>
      <div className={classes.flexColumnOfEmail}>
        <div className={classes.flexRow}>
          <img src={props.src} alt={props.alt} />
          <p className={classes.titleName}>{props.propertyType}</p>
        </div>
        <p className={classes.descriptions}>{props.descriptions}</p>
      </div>
    </Fragment>
  )
}

export default LogoProperties;