import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


const styles = StyleSheet.create({
    textoCabecera: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize:20
    },
    cabecera:{
        paddingTop:30,
        paddingBottom: 10,
        paddingRight:10,
        backgroundColor: '#35605a'
    }
});


class LogInHeader extends React.Component{

    render(){
        let text=this.props.logged? 'Usuario Anonimo':this.props.msj;
        return (
            <Text onPress={this.props.changeLog} style={styles.textoCabecera}>{text}</Text>
        )
    }
}

export class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state={logged:false};
    }

    changeLog(){
        if(this.state.logged==false){
            this.setState({logged:true});
        }else{
            this.setState({logged:false});
        }
    }

    render(){
        let text=this.state.logged? 'Usuario Anonimo':this.props.msj;
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={<LogInHeader logged={this.state.logged} msj={text} changeLog={this.changeLog.bind(this)}/>}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}