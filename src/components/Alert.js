import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (

        // if props.alert null hai to alert startement ye wala print hoga  
        //Nahi to props wala
        props.alert && <div className={`alert alert-${capitalize(props.alert.type)} alert-dismissible fade show" role="aler`}>
            <strong> {props.alert.type}</strong>: {props.alert.msg}
        </div>

    )
}

export default Alert
