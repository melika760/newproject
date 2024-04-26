import MenuItems from "./MenuItems";
import styles from "./Menu.module.css"
import { dummydata } from "../Store/MenuData";
const Menu=()=>{
    const groupedItems = dummydata.reduce((acc, item) => {
        if (!acc[item.Category]) {
          acc[item.Category] = [];
        }
        acc[item.Category].push(item);
        return acc;
      }, {});
    
      return (
        <div>
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className={styles.all}>
              <h2 className={styles.title} id={category}>{category}</h2>
              {category==="Pasta" && <p className={styles.extra}>All pasta dishes can be served either Spaghetti or Penne</p>}
              {category==="Salads" && <p className={styles.extra}>All Served with Pita Bread</p>}
            <div className={styles.wrap}> {items.map((item) => (
                <MenuItems
                  Category={item.Category}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                  prices={item.prices}
                  subCategory={item.subCategory}
                />
              ))}</div>
              {/* btn */}
            </div>
          ))}
        </div>
        
      );
}
export default Menu;