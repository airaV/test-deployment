
import '../assets/Products.css'

type CardProps = {
    imageUrl: string
    title: string
    price: string
    buttontext: string
}
export default function Card(props:CardProps) {
  return (
    <div className='content'>
    <div className='product-img'>
    <img className='product-img'  src={props.imageUrl} /> 
    
    </div>
    <div className='detail'> 
    <p className='product-title'>{props.title}</p> 
    
    
    </div>
    <div className='detail'> 
    <p className='product-price'>{props.price}</p>
    <p className='product-button'>{props.buttontext}</p>
    
    </div>
</div> 
  )
}
