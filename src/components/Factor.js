import React from 'react'
import changeCurrency from './Util';
import Fade from 'react-reveal/Fade';
function Factor(props) {
    const itemPeice = props.cardItem.reduce((a,b) => a + b.price * b.qty,0 )
    const totalPrice = itemPeice;
    return (
        <div className='factor'>
          {
            props.cardItem.length === 0 ?  
             <div className='inventory-factor-empty'>سبد خرید خالی است</div>: 
              <div className='inventory-factor-full'>شما {props.cardItem.length} محصول در سبد خرید دارید</div>
          }
            <div className='factor-item'>
                {
                props.cardItem.map((item ) =>
                <Fade left>
                    <div className='item' key={item.id}>
                    <div className='intro'>
                        <img src={item.image} alt="" />
                        <div className='name'>{item.title}</div>
                    </div>
                    <div className='result'>
                        <div className='price-box'>
                            <div className='price'>{changeCurrency(item.price)}</div>
                            <div className='count'>تعداد : <span>{item.qty}</span></div>
                        </div>
                        <button type="button" onClick={() => props.removeItem(item)} className='remove'>حذف از سبد خرید</button>
                    </div>
                </div>
                </Fade>
                )
                }
            </div>
            <div className='result-price'>
                <div className='total-title'>مجموع قیمت :</div>
                <div className='total-price'>{changeCurrency(totalPrice)}</div>
            </div>
        </div>
    )
}

export default Factor