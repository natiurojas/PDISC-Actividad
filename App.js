import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Logo from './assets/Productos/a.jpg'
import HeaderImg from './assets/Productos/Imagen.jpg'

export default function App() {
  return (
    // Tres Tarjetas sobre productos
    <View style={styles.container}>
      <Image source={HeaderImg} style={styles.header} />
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
        <Text style={styles.footerText}>© 2026 Devil May Cry. Todos los derechos reservados.</Text>
        <Text style={styles.footerSubtext}>Contacto: info@tienda.com | Tel: +1 234 567 890</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  tarjetas: {
    backgroundColor: '#000000',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#003049',
    shadowColor: '#003049',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
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
    color: '#780000',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    backgroundColor: '#003049',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#FDF0D5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSubtext: {
    color: '#669BBC',
    fontSize: 14,
    marginTop: 5,
  },
});
