import React from 'react'
import ReactLoading from 'react-loading'
import { useSelector } from 'react-redux'

export default function Spinner() {
    const loading = useSelector((state) => state.common.loading)
    return (
        loading &&
        <div className='position-fixed d-flex flex-wrap justify-content-center align-items-center w-100 h-100'>
            <ReactLoading type='spokes' color="#198754" />
        </div>
    )
}