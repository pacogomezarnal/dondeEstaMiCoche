import React from 'react';
import { View ,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { LogIn } from '../widgets/LogIn.js';
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';



const dirPicutures = `../resources/img/`;

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    },
    descripcion: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
	    justifyContent: 'center',
        alignItems: 'center',
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
        paddingRight:30,
        paddingLeft:30,
	    justifyContent: 'center',
        alignItems: 'center'
    },
    botonSalvar: {
        paddingRight:30,
        paddingLeft:30
    },
});



export class Nuevo extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        text: 'Descripcion del sistio',
        posicion: null,
        imgagenGuardada:'http://icons.iconarchive.com/icons/custom-icon-design/mono-general-3/256/camera-icon.png'
      };


    returnData(img) {
        this.setState({img: img});
        console.log(this.state.img);
        navigator.geolocation.getCurrentPosition(
            position=>{
                const JSONPosition =JSON.stringify(position);
                this.setState({'posicion':JSONPosition})
                console.log(this.state.posicion);
            },
            error=>{
                console.log("Error en la localizacion");
            }
        );
        //movemos imagen de directorio
        const currentdate = new Date(); 
        const stringDate = currentdate.getDate() 
                + (currentdate.getMonth()+1)
                + currentdate.getFullYear() + "_"  
                + currentdate.getHours()  
                + currentdate.getMinutes() 
                + currentdate.getSeconds();
        const newImageName = FileSystem.documentDirectory+`files/`+`${stringDate}.jpg`;
        FileSystem.makeDirectoryAsync(
            FileSystem.documentDirectory+`files`,
          )
            .then(({ uri }) => {
              console.log('Creado directorio');
            })
            .catch(error => {
              console.log('Directorio existe');
            });
        FileSystem.moveAsync({'from':img.uri,'to':newImageName});
        this.setState({imgagenGuardada: newImageName});
        console.log(newImageName);
    };
    
    render(){
        return (
            <View style={styles.contenedor}>
                <LogIn msj="Apretar para LogIn"></LogIn>
                <View style={styles.descripcion}>
                    <Input
                        placeholder={this.state.text}
                    />
                </View>
                <TouchableOpacity style={styles.photo} onPress={() => this.props.navigation.navigate('CameraView', {returnData: this.returnData.bind(this)})}>
                    <Image  
                        style={styles.photoImg}
                        source={{uri:this.state.imgagenGuardada}}
                    /> 
                </TouchableOpacity>
                <View style={styles.save}>
                    <Button
                        icon={
                            <Icon
                            name="save"
                            size={15}
                            color="white"
                            />
                        }
                        iconRight
                        title="SALVAR  "
                        buttonStyle={styles.botonSalvar}
                    />
                </View>
            </View>
            )
    }
}