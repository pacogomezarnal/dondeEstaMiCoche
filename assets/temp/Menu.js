import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Alert } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#35605a'
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#35605a'
    },
    boton: {
        width:'50%',
        height: '50%',
        backgroundColor: '#35605a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBoton:{
        color:'#ffffff',
        fontSize: 18
    }
});

export class Menu extends React.Component{

    viewMsg = ()=>{
        Alert.alert("Has apretado el boton");
    }

    render(){
        return (
            <View style={styles.contenedor}>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>SITIO 4</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}