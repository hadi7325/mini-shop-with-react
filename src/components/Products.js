import React from 'react'
import changeCurrency from './Util';
import Fade from 'react-reveal/Fade';
function Products(props) {


    return (
        <Fade bottom cascade>
            <ul className='products'>
                {
                    props.item.map((item) =>
                        <li key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="name">{item.title}</div>
                            <div className='price-box'>
                                <button onClick={() => props.addCardItems(item)} type="button">افزودن به سبد خرید</button>
                                <div className='price'>{changeCurrency(item.price)}</div>
                            </div>
                        </li>
    )
}


        </ul >
    
    </Fade>
    )
}

export default Products