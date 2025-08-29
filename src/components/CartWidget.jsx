import React from 'react'
import { Badge } from 'react-bootstrap'
import { BsCart4 } from 'react-icons/bs'   

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <BsCart4 size={28} color="white" />   
      <Badge bg="success" className="ms-2">
        ¡Felicitaciones! 🎉
      </Badge>
    </div>
  )
}

export default CartWidget
