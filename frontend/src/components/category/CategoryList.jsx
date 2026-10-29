import Category from "./Category.jsx";
import './Category.css'
function CategoryList() {
    const BASE_URL = "https://ssd-snapcart-assets.netlify.app/"
    const categories = [
            {
                id: "1",
                image_name: `${BASE_URL}/fruits_&_vegetables.jpg`,
                category: "Fruits and vegetables"
            },
            {
                id: "2",
                image_name: `${BASE_URL}/lays.jfif`,
                category: "Snacks"
            },
            {
                id: "3",
                image_name: `${BASE_URL}/Drinks.jpg`,
                category: "Drinks"
            },
            {
                id: "4",
                image_name: `${BASE_URL}/Skin_care.jpg`,
                category: "Skin Care"
            },
            {
                id: "5",
                image_name: `${BASE_URL}/Icecream.jfif`,
                category: "IceCream"
            }];
    return (
        <div className="CategoryList">
            {
                categories.map((c) =>{
                    return <Category key={c.id} {...c}/>
                })
            }
            
        </div>
    )
}


export default CategoryList