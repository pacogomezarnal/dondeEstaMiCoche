import React from 'react';
import { Text, View ,StyleSheet,TextInput, Image,Button} from 'react-native';
import { LogIn } from '../widgets/LogIn.js'

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    },
    descripcion: {
        flex:1,
	    justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray', 
        borderWidth: 1
    },
    descripcionInput: {
        width: '75%',
        height: 30,
        borderColor: 'gray', 
        borderWidth: 1
    },
    photo: {
        flex:6,
	    justifyContent: 'center',
        alignItems: 'center'
    },
    photoImg: {
        width: 86,
        height: 86
    },
    save: {
        flex:1,
	    justifyContent: 'center',
        alignItems: 'center'
    },
});


export class Nuevo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Descripcion del sistio' };
    }
      
    
    render(){
        return(
            <View style={styles.contenedor}>
                <LogIn msj="Apretar para LogIn"></LogIn>
                <View style={styles.descripcion}>
                    <TextInput
                        style={styles.descripcionInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
                <View style={styles.photo}>
                    <Image
                        style={styles.photoImg}
                        source={require('../resources/img/photo.jpg')}
                    /> 
                </View>
                <View style={styles.save}>
                    <Button   
                        title="Salvar"
                        color="#1194f6">
                    </Button>
                </View>
            </View>
        )
    }
}