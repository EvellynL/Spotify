import React from 'react'
import SingleItem from './SingleItem'

const ItemList = ({title, items}) => {
    console.log(title);

  return (
    <>
    <div className="item-list">
                <div className='item-list__header'>
                    <h2>{title} Populares</h2>
                    <a className= 'item-list__link' href="">Mostrar tudo</a>
                </div>
    
                <div className="item-list__container">
                    {items == 5 ? (
                    <>
                        <SingleItem />
                        <SingleItem />
                        <SingleItem />
                        <SingleItem />
                        <SingleItem />
                    </>
                    ) : (
                        <>
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                            <SingleItem />
                        </>
                    )}
    
               
                </div>
            </div>
    </>
  )
}

export default ItemList