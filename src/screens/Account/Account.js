import React from 'react'
import { View } from 'react-native'
import {Button, Text} from 'native-base'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

const Account = ({navigation}) => {

   const dispatch = useDispatch()

   const onSignOut = () => {

      // hapus data async storage
      AsyncStorage.removeItem("user")
      .then(res => {
         // hapus data di redux state
         dispatch({type: 'LOGOUT'})
      })
      
   }

   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Account Component</Text>
         <Button block onPress={onSignOut} >
            <Text>Sign Out</Text>
         </Button>
      </View>
   )
}

export default Account

// hapus data di redux state
// hapus data async storage