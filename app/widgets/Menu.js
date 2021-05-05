import React from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,FlatList } from 'react-native';
import { db } from '../config/db';

let sitios = [];
const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    menu:{
        flex:6
    },
    add:{
        flex:1
    },
    fila: {
        flex:1,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#454545'
    },
    boton: {
        flex:1,
        backgroundColor: '#454545',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBoton:{
        color:'#ffffff',
        fontSize: 20
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
                    <View style={styles.menu}>
                        <FlatList
                        data={this.state.sitios}
                        renderItem={item => this.renderItem(item)}
                        keyExtractor={(item, index) => item.key}
                        />  
                    </View>    
                    <View style={styles.add}>
                        <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Nuevo')}>
                            <Text style={styles.textoBoton}>Nuevo Sitio</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
              )
        }
    }
}