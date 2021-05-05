import React from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,FlatList } from 'react-native';
import { db } from '../config/db';

let sitios = [];
const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    filaDestacada: {
        flex:2,
        flexDirection: 'row',
	    justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#353535'
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#353535'
    },
    boton: {
        flex:1,
        backgroundColor: '#353535',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBoton:{
        color:'#ffffff',
        fontSize: 18
    }
});

export class Menu extends React.Component{

    state = {
        sitios: [],
        loading: true
    }

    constructor(props){
        super(props);
    }

    
    viewMsg = ()=>{
        Alert.alert("Has apretado el boton");
    }

    componentDidMount(){
        db.collection("sitios").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                sitios.push({"key":doc.id,"value":doc.data()});
            });
            this.setState({sitios:sitios, loading: false});
        });
    }

    renderItem = data =>
        <View style={styles.fila}>
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Sitio',{'titulo':data.item.value.detalle,'img':data.item.value.url})}>
                <Text style={styles.textoBoton}>{data.item.value.detalle}</Text>
            </TouchableOpacity>
        </View>

    render(){

        if(this.state.loading){
            return (
                <View style={styles.contenedor}>
                  <Text>Cargando</Text>
                </View>
              )
        }else{
            return (
                <View style={styles.contenedor}>
                    <FlatList
                    data={this.state.sitios}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={(item, index) => item.key}
                    />      
                </View>
              )
        }
    }
}