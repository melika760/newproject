import Styles from "./MenuItems.module.css";
const MenuItems=(props)=>{
const price=`£${parseInt(props.price).toFixed(2)}`;

return(
    <div className={Styles.wrapItems} id={props.id}>
    <div className={Styles.item}>
         <div className={Styles.prices}><h3>{props.title} </h3>
            {!props.prices && <h3>{price}</h3>}
            {props.prices && <span ><h3 style={{display:"inline"}}>Single:£{(props.prices[0]).toFixed(2)}</h3><h3 style={{display:"inline",marginLeft:15}}>Double:£{(props.prices[1]).toFixed(2)}</h3></span>}
            </div>
         <p className={Styles.description}>{props.description}</p>
         {props.subCategory==="Hot Sandwich" && <div><strong>({props.subCategory})</strong>
      <p>Served with Chips & Salad</p></div>}
         {props.subCategory==="Club Sandwich" && <div><strong>({props.subCategory})</strong>
      <p>Served with White or Brown Bread & Garnish Salad.To add chips extra <strong>£1</strong></p></div>}
        </div>
    </div>
   )

}
export default MenuItems;