import React from 'react';
import {View, Text} from 'react-native';

function MemberResult ({route}) {

const {user} = route.params

    return (
        <View>
            <Text>{user.userName}</Text>
            <Text>{user.userPassword}</Text>
            <Text>{user.userMail}</Text>
        </View>
    )
}
export default MemberResult;