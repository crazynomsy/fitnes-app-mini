import React from "react";
import { TextInput, Text, View } from 'react-native';

import styles from './Input.styles';


function Input ({label, placeholder, onChangeText}) {
    return (
      <View>
        <Text style={styles.text}>{label}</Text>
        <View>
            <TextInput style={styles.ınput}
            placeholder={placeholder}
             onChangeText={onChangeText} />
        </View>
      </View>
    )
}
export default Input;