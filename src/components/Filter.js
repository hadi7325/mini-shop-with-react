import React from 'react'

function Filter(props) {
  return (
    <div className='filter'>
        <div className='count-item'>
            <p >تعداد محصولات : </p>
            <p className='inventory'><span>{props.count}</span> محصول</p>
        </div>
        <div className="sort">
            <div className='title'>مرتب سازی بر اساس</div>
             <div className='all-input'>
             <div className='input-group'>
                <input type="radio" onChange={props.changeSort} name='radio' value={"new"}/>
                <label >جدید ترین محصولات</label>
            </div>
            <div className='input-group'>
                <input type="radio" onChange={props.changeSort} name='radio' value={"old"}/>
                <label>قدیمی ترین محصولات</label>
            </div>
             </div>
        </div>
        <div className='brands'>
            <div className='title'>برند ها</div>
            <select value={props.brand} onChange={props.changeBrand}>
                <option value={""}>همه</option>
                <option value={"samsung"}>سامسونگ</option>
                <option value={"iphone"}>آیفون</option>
                <option value={"motorola"}>موتورولا</option>
                <option value={"blackberry"}>بلک بری</option>
                <option value={"lg"}>ال جی</option>
                <option value={"sony"}>سونی</option>
            </select>
        </div>
    </div>
  )
}

export default Filter