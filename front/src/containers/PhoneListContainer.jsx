import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as phoneActions from '../actions/phone'
import { PhoneDetailComponent } from '../components'

const PhoneListContainer = () => {
    const dispatch = useDispatch()
    const phones = useSelector((state) => state.phone.lists)

    useEffect(() => {
        const initialize = async () => {
            dispatch(phoneActions.getPhones())
        }

        initialize()
    }, [dispatch])

    const selectPhone = (phone) => {
        dispatch(phoneActions.selectPhone(phone))
    }

    return (
        <div className='d-flex flex-column'>
            <div className='navbar navbar-light p-3 mb-3 bg-success'>
                <a className="navbar-brand" href="/">Phone Catalog App</a>
            </div>
            <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
                <div className='col-md-8'>
                    <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
                        {
                            phones && phones.length > 0 && phones.map((phone, index) => (
                                <div className='col-md-6' key={index} style={{ cursor: 'pointer' }} onClick={() => selectPhone(phone)}>
                                    <div className='d-flex flex-column align-items-center justify-content-center p-2'>
                                        <h4>{phone?.title}</h4>
                                        <img src={phone?.image} className='my-2' alt={phone?.title} width={200} height={200} />
                                        <h6>{phone?.description}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='col-md-4'>
                    <PhoneDetailComponent />
                </div>
            </div>
        </div>
    )
}

export default PhoneListContainer