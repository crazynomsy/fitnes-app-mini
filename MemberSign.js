import React, {useState} from "react";
import {SafeAreaView , Text ,Alert} from 'react-native';

import Input from '../Input/Input';
import OneButton from "../Button/OneButton";


function MemberSign ({navigation}) {

   const [userName,setUserName] = useState(null);
   const [userPassword,setUserPassword] = useState(null);
   const [userMail,setUserMail] = useState(null);

    function handleSubmit () {


        if(!userName || !userPassword || !userMail ) {
            Alert.alert('Kebap Fitness','Bu alan boş bırakılamaz');
            return;
        }
        
        
        
        
        const user = {
            userName,
            userMail,
            userPassword,
        }

      navigation.navigate('MemberResultScreen', {user})

    }




    return (
        <SafeAreaView >

            <Text>Member</Text>
            <Input 
            placeholder='Kullanıcı adını giriniz'
            label='Kullanıcı Adı:'
            onChangeText={setUserName}  />

            <Input
             placeholder='Şifrenizi Giriniz...' 
             label='Şifre'
             onChangeText={setUserPassword} />

            <Input 
            placeholder='E-maili Giriniz' 
             label='E-mail'
             onChangeText={setUserMail}/>

            <OneButton text='Kayıtı tamamla' 
            onPress={handleSubmit}/>
           
        </SafeAreaView>
    )
}



export default MemberSign;