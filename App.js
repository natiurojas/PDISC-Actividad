import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity, scrollview } from 'react-native';

import Logo from './assets/Productos/a.jpg'

export default function App() {
  return (
    // Tres tarjetas sobre productos
    <View style={styles.container}>
      <view>
        <scrrollview contentContainerStyle={styles.container}>
        <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Producto1</Text>

      <Image
        source={Logo}
        style={styles.ImgProducto}
      ></Image>
</scrrollview>
      </view>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgProducto:{
    width:250,
    height:250,
    resizeMode:'contain',
  },
  Titulo:{
    textAlign:'center',
    fontSize:30,
    margin:10,
    color:'#304080',
  },
  Boton:{
padding:15,
borderRadius:10,
backgroundColor:'#384090',
width:180,
marginTop:10,
  }
});
