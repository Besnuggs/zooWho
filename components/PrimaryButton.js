import React from 'react';
import { Button } from 'react-native-paper';

const PrimaryButton = (props) => {
    const {handlePress, label, style} = props;

    return(
        <Button
            compact
            raised
            mode="contained"
            onPress={handlePress}
        >
            {label}
        </Button>
    )
}

export default PrimaryButton