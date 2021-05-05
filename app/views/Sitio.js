import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { LogIn } from '../widgets/LogIn.js'

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    },
    titulo: {
        flex:1,
	    justifyContent: 'center',
        alignItems: 'center'
    },
    lugar: {
        flex:3,
	    justifyContent: 'center',
        alignItems: 'center'
    }
});


export class Sitio extends React.Component{
    render(){
        return(
            <View style={styles.contenedor}>
                <LogIn msj="Apretar para LogIn"></LogIn>
                <Text style={styles.titulo}>{this.props.navigation.getParam('titulo')}</Text>
                <Text style={styles.lugar}>{this.props.navigation.getParam('img')}</Text>
            </View>
        )
    }
}