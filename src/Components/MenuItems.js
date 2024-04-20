import React,{Fragment} from "react";
import Styles from "./MenuItems.module.css";
const MenuItems=(props)=>{
const price=`$${props.price}`
return(<Fragment>
    <div className={Styles.item}>
        <h3 className={Styles.title}>{props.title}</h3>
        <p className={Styles.description}>{props.description}</p>
    </div>
    <div className={Styles.price}>{price}</div>
    </Fragment>)

}
export default MenuItems;