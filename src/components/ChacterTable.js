import React from 'react'
import ChacterItem from './ChacterItem'

export const ChacterTable = ({items,isLoading}) => {
  return (
    isLoading ? <h1>Loading</h1> :
    <section className='contents'>
        {
            items.map(item=>(
                <ChacterItem key={item.id} item={item}/>
            ))
        }
    </section>
  )
}
