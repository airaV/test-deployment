

import './App.css'
import Card from './Components/Card'

function App() {

var productlist = [
  {
    imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    title:"Basic Tee",
    price:"$35", 
    buttonText: "Add to Cart"
  },
  {
    imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    title:"Basic White Tee",
    price:"$35", 
    buttonText: "Add to Cart"
  }, {
    imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    title:"Basic Charcoal Tee",
    price:"$35", 
    buttonText: "Add to Cart"
  }, {
    imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    title:"Artwork Dots Tee",
    price:"$45", 
    buttonText: "Add to Cart"
  }
];

  return (
    <div className="App">
        <div className='container'>
        {
          productlist.map((product, index) => (
            <Card key={index} imageUrl={product.imageUrl} title={product.title} price={product.price} buttontext={product.buttonText} />
          ))
        }
      </div>
      

    </div>
  )
}

export default App
