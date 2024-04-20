import MenuItems from "./MenuItems";
const dummydata=[
{
    Category:"Breakfast",
    title:"Full English",
    description:"2 Free Range Eggs,Cumberland Sausage,2 A1 Bacons,Grilled Tomato,Baked Beans,Mushroom and Toast",
    price:10.95,
    id:"B1"
},
{
    Category:"Breakfast",
    title:"Dominique's Special",
    description:"2 Free Range Eggs, 2 Sausages, 2 A1 Bacons and a Pieces of Toast",
    price:9.95,
    id:"B2"
}
];
const Menu=()=>{
 console.log(dummydata)
if(dummydata.Category==="Breakfast"){
    return(
        <div>
            <h2>Breakfast</h2>
            {dummydata.map(items=>(<MenuItems title={items.title} description={items.description} price={items.price}/>))}
        </div>
    )

}
}
export default Menu;