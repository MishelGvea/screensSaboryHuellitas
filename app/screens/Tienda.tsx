import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const productos = [
  { nombre: 'Collar Premium', precio: '$250', descripcion: 'Collar ajustable con campanita.', imagen: require('../../assets/images/collar.webp') },
  { nombre: 'Alimento 5kg', precio: '$480', descripcion: 'Alimento premium para perros y gatos.', imagen: require('../../assets/images/alimento.jpeg') },
  { nombre: 'Dispensador IoT', precio: '$1500', descripcion: 'Dispensador automático de comida.', imagen: require('../../assets/images/dispensador.jpeg') },
  { nombre: 'Plato para comida', precio: '$120', descripcion: 'Plato resistente de acero inoxidable.', imagen: require('../../assets/images/platos.jpeg') },
  { nombre: 'Juguete de goma', precio: '$200', descripcion: 'Juguete mordedor para perros.', imagen: require('../../assets/images/juguetes.jpg') },
  { nombre: 'Cama para mascotas', precio: '$980', descripcion: 'Cama cómoda y acolchonada.', imagen: require('../../assets/images/cama.jpeg') },
];


const CardProducto = ({ nombre, precio, descripcion, imagen }: { nombre: string; precio: string; descripcion: string; imagen: any }) => {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Text style={styles.precio}>{precio}</Text>
      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.botonTexto}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.botonTexto}>Ver detalles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="🔍 Buscar productos..."
        placeholderTextColor="#666"
        style={styles.input}
        onChangeText={onSearch}
      />
    </View>
  );
};


const Tienda = () => {
  const [busqueda, setBusqueda] = useState('');
  const productosFiltrados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🐾Tienda de Mascotas🐾</Text>
      <SearchBar onSearch={setBusqueda} />
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        renderItem={({ item }) => (
          <CardProducto nombre={item.nombre} precio={item.precio} descripcion={item.descripcion} imagen={item.imagen} />
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

export default Tienda;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 10,
    alignItems: 'center',
  },
  titulo: {
    margin:15,
    padding:20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFD700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  searchContainer: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFD700',
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#212121',
  },
  lista: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between', 
  },
  card: {
    backgroundColor: '#FFF',
    width: width * 0.45, 
    margin: 8,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
  },
  descripcion: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginVertical: 5,
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 5,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  boton: {
    backgroundColor: '#FFD700',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  botonTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#212121',
  },
});
