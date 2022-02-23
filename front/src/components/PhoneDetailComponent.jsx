import React from 'react'
import { useSelector } from 'react-redux' 

const PhoneDetailComponent = () => {
    const phone = useSelector((state) => state.phone.selected)

    return (
        phone ?
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3>{phone?.title}</h3>
            <img src={phone?.image} alt={phone?.title} width={300} height={300} />
            <h6 className='w-100 text-left'>{phone?.description}</h6>
            <h6 className='w-100 text-left'>Price: {phone?.price}</h6>
            <h6 className='w-100 text-left'>Color: {phone?.color}</h6>
        </div>
        :
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h2>Not Selected</h2>
        </div>
    )
}

export default PhoneDetailComponent