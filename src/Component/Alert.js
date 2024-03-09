import React from 'react'

const Alert = (props) => {
    return (
       <div className='alert-container'>
        { props.alert &&  <div className='alert-div'>
           <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong> {props.alert.type}</strong>:  {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>}
       </div>
    )
}

export default Alert