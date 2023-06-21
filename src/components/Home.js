import Factor from "./Factor";
import Filter from "./Filter";
import Products from "./Products";
import data from "../data.json"
import { useState } from "react";

function Home() {

    const [item, setItem] = useState(data.products)
    const [sort, setSort] = useState("new")
    const [brand, setBrand] = useState("")
    const [cardItem,setCardItem] = useState([])
    console.log(item)
    console.log(item)
    const changeSort = (e) => {
        setSort(e.target.value)
        console.log(sort)
        if (sort === "new") {
            setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)))
        }
        if (sort === "old") {
            setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)))
        }
    }

    const changeBrand = (e) => {
        setBrand(e.target.value)
        if (e.target.value === "") {
            setBrand(e.target.value)
            setItem(data.products)
        }else{
            setBrand(e.target.value)
            setItem(data.products.filter((product) => product.availableBrand.indexOf(e.target.value) >= 0))
            
        }
    }
    
    const addCardItems = (product) =>{
        console.log(cardItem)
        const exist = cardItem.find((element) => element.id === product.id)
        if(exist){
            setCardItem(
                cardItem.map((item) => item.id === product.id ? {...exist, qty: exist.qty + 1} :item)
            )
        }else{

            setCardItem([...cardItem,{...product, qty : 1}])
        }


    }

    const removeItem = (product) =>{
        const exist = cardItem.find((element) => element.id === product.id)
        if(exist.qty === 1){
             setCardItem(cardItem.filter((item) => item.id !== product.id))
        }else{
            setCardItem(
                cardItem.map((item) => item.id === product.id ? {...exist, qty: exist.qty - 1} :item)
            )
        }
    }


    return (
        <div className="container">
            <header>
                فروشگاه مدرن کالا
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter
                            count={item.length}
                            changeSort={changeSort}
                            brand={brand}
                            changeBrand={changeBrand}
                        />
                        <Products
                         item={item}
                         addCardItems={addCardItems} />
                    </div>
                    <div className="sidebar">
                        <Factor cardItem={cardItem} 
                        removeItem={removeItem}
                        />
                    </div>
                </div>
            </main>
            <footer>
                توسعه یافته توسط تیم اکشن وب
            </footer>
        </div>

    );
}

export default Home;
