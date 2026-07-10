import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Logo from './assets/Productos/dante.gif'
import VergilImg from './assets/Productos/vergil.gif'
import NeroImg from './assets/Productos/nero.gif'
import HeaderImg from './assets/Productos/Imagen.jpg'
import DanteTitle from './assets/Productos/dantesparda01.png'

export default function App() {
  return (
    // Tres Tarjetas sobre productos
    <View style={styles.container}>
      <Image source={HeaderImg} style={styles.header} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.tarjetas}>
          <Image source={DanteTitle} style={styles.tituloImg} />
          <Image source={Logo} style={styles.ImgProducto} />
          <Text style={styles.descripcion}>Dante es el protagonista principal de la franquicia Devil May Cry y el personaje jugable principal en la mayoría de los juegos de la serie. Es el segundo hijo del demonio Sparda y la humana Eva, el hermano gemelo menor de Vergil y el tío de Nero.</Text>
        </View>

        <View style={styles.tarjetas}>
          <Text style={styles.Titulo}>V𝔢𝔯𝔤𝔦𝔩 𝔖𝔭𝔞𝔯𝔡𝔞</Text>
          <Image source={VergilImg} style={styles.ImgProducto} />
          <Text style={styles.descripcion}>Vergil es el hermano gemelo mayor de Dante y uno de los principales antagonistas de la saga Devil May Cry. Tras la muerte de su madre en la infancia, Vergil y Dante tomaron caminos separados: Vergil rechazó su humanidad y abrazó su herencia demoníaca, mientras que su hermano menor aceptó su humanidad y rechazó inicialmente lo demoníaco. Estoico y reservado, Vergil está dispuesto a hacer cualquier cosa para obtener el poder de su padre, Sparda.</Text>
        </View>

        <View style={styles.tarjetas}>
          <Text style={styles.Titulo}>𝔑𝔢𝔯𝔬 𝔖𝔭𝔞𝔯𝔡𝔞</Text>
          <Image source={NeroImg} style={styles.ImgProducto} />
          <Text style={styles.descripcion}>Nero es el deuteragonista de la franquicia Devil May Cry. Apareció por primera vez como personaje jugable en Devil May Cry 4 y posteriormente en Devil May Cry 5. Se crió en Fortuna y sirvió como Caballero Sagrado en la Orden de la Espada, un grupo religioso que venera a Sparda y lucha para proteger al mundo de los demonios. Más adelante se revela que es hijo de Vergil, sobrino del legendario cazador de demonios Dante y nieto del legendario caballero oscuro Sparda.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Devil May Cry. Todos los derechos reservados.</Text>
        <Text style={styles.footerSubtext}>Contacto: devilmaycry.com | Tel: +54 11 1234-5678</Text>
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
  tituloImg: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
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
  descripcion: {
    textAlign: 'center',
    fontSize: 14,
    color: '#003049',
    marginHorizontal: 10,
    marginTop: 10,
    lineHeight: 20,
  },
  precio: {
    textAlign: 'center',
    fontSize: 22,
    color: '#C1121F',
    fontWeight: 'bold',
    marginTop: 10,
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
