import React from "react";
import {Alert} from 'react-bootstrap'
const styles = {
    alert:{
        marginTop: "10px"
    }
}

function AlertCustom (props){
    return(
        <Alert variant={props.variant} styles={styles.alert}>
            {props.text}
        </Alert>
    )
}

export default AlertCustom;
