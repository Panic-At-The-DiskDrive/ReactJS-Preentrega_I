import React from 'react'

function ItemListContainer({ greeting }) {
  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2 className="text-center">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
