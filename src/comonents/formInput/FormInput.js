import React from 'react'
import "./FormInput.css"

function FormInput({handleChange,label,...otherProps})
{
   return( <div className="group">
       {
            label ?
            <label className ="label">
                {label}
            </label>
            : null
        }
        <input className="form-input" onChange={handleChange} {...otherProps} />
        
    </div>
   )

}


export default FormInput