/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {SafeAreaView, ScrollView, Text,TextInput} from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore'
 
 const App: () => Node = () => {
   firestore().collection('User').doc('ABC').get().then((user) => {
    console.log(user) 
   } );
   return (

     <SafeAreaView >
      <ScrollView > 
      <Text style = {{fontSize:20}} >Teerapong uthawan</Text>
      <Input placeholder='Hint'/>

            <Button
        title="Solid Button"
      />
            <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        iconRight
        title="Button with right icon"
      />
      <Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

    <Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

     <TextInput
     style= {{backgroundColor:'#DDDDDD'}}
     keyboardType='phone-pad'></TextInput>


<Image
  source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5089d0fb-86f4-41e4-ab26-5b7dc365eba1/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-air-zoom-tempo-next-chNfdw.png' }}
  style={{ width: 200, height: 200 }}
/>
<Image
  source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-blazer-mid-77-vintage-dNWPTj.png' }}
  style={{ width: 200, height: 200 }}

/>
<Image
  source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/uoxteud0rv2d2wml9xkl/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-vrP72V.png' }}
  style={{ width: 200, height: 200 }}

/>
<Image
  source={{ uri: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a6f9b10b-3d43-4aaf-9017-5f3da81d9a13/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-overbreak-%E2%80%9Ckhaki%E2%80%9D.jpg' }}
  style={{ width: 200, height: 200 }}

/>
<Image
  source={{ uri: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/78863006-7f0a-4684-b7b2-7dd3becafe42/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-zoom-004-x-mmw-%E2%80%9Crust-factor%E2%80%9D.jpg' }}
  style={{ width: 200, height: 200 }}

/>
</ScrollView>
</SafeAreaView>


   );

 };
 
 
 
 export default App;