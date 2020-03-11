import React from 'react';
import { Button } from 'react-native-paper';

const PrimaryButton = (props) => {
    const {handlePress, style, icon, color} = props;

    return(
        <Button
            compact
            raised
            color={color}
            mode="contained"
            icon={icon}
            onPress={handlePress}

        />
        
    )
}

export default PrimaryButton