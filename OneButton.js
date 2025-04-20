import React from "react";
import {Text,TouchableOpacity} from 'react-native';

import styles from './OneButton.styles';

const OneButton = ({text,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        
          
       
    )
}
export default OneButton;