import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Logo from './assets/Productos/a.jpg'

export default function App() {
  return (
    // Tres Tarjetas sobre productos
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.tarjetas}>
          <Text style={styles.Titulo}>Producto1</Text>
          <Image source={Logo} style={styles.ImgProducto} />
        </View>

        <View style={styles.tarjetas}>
          <Text style={styles.Titulo}>Producto2</Text>
          <Image source={Logo} style={styles.ImgProducto} />
        </View>

        <View style={styles.tarjetas}>
          <Text style={styles.Titulo}>Producto3</Text>
          <Image source={Logo} style={styles.ImgProducto} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Tienda ReactNative. Todos los derechos reservados.</Text>
        <Text style={styles.footerSubtext}>Contacto: info@tienda.com | Tel: +1 234 567 890</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  tarjetas: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 300,
  },
  ImgProducto: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  Titulo: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: '#304080',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    backgroundColor: '#304080',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSubtext: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});
