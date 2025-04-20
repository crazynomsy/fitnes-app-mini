import React from "react";  
import {SafeAreaView,StyleSheet,Text} from 'react-native';
import OneButton from "../Button/OneButton";


function Welcome ({navigation}) {
    function MemberSignGO () {
        navigation.navigate('MemberSignScreen')

    }
    return (
    <SafeAreaView style={styles.container}> 
    <Text style={styles.text1}>Kebap Fitness Salonu</Text>
        
        <OneButton text='Üye Kaydı Oluştur' onPress={MemberSignGO}/>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    text1:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        padding:16,
        margin:10,
        
    }

})

export default Welcome;