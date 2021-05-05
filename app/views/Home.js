import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { LogIn } from '../widgets/LogIn.js'
import { Menu } from '../widgets/Menu.js'

import { db } from '../config/db';

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    }
});

export class Home extends React.Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.contenedor}>
                <LogIn msj="Apretar para LogIn"></LogIn>
                <Menu navigate={navigate}/>
            </View>
        )
    }

}