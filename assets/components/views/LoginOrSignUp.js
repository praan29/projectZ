import React, { Component } from 'react';
import {
	Alert,
	Text,
	View,
	Image,
	StyleSheet,
}from 'react-native';

import {Button} from 'react-native-elements';
const companyLogo = require('../img/logo.png');

export default class LoginOrSignUp extends React.Component{
render(){
		return(
			<View style = {styles.container}>

				<View style={styles.logo}>
					<Image
						source={companyLogo}
						style = {styles.logoSize}
					>
					</Image>
				</View>

				<View style={[styles.buttons]}>
					<Button
						title='Login'
						color= '#fff'
						fontSize = {22}
						fontWeight='300'
						fontFamily= 'Roboto'
						buttonStyle={[styles.buttonLogin]}
						onPress={() =>  this.props.navigation.navigate('Login')} 
					/>

					<Button
						title='Sign Up'
						color= '#fff'
						fontSize = {22}
						fontWeight='300'
						fontFamily= 'Roboto'
						buttonStyle={[styles.buttonSignUp]}
						onPress={() =>  this.props.navigation.navigate('SignUp',{headerTitle : 'Create Acc'})} 
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex : 1,
		backgroundColor:'#FFFF',
	},
	logo:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	logoSize:{
		width:100,
		height:100,
	},
	buttons:{
		// flexDirection:'column',
		// margin:20,
		// alignItems:'center',
		// paddingVertical:150,
		// justifyContent:'space-around',
		flex: 1,
		marginTop : 6,
		flexDirection : 'column',
	},
	buttonLogin:{
		// width : 180,
		// alignItems : 'center',
		// justifyContent:'center',
		height : 55,
		margin:15,
		borderRadius : 20,
		backgroundColor : '#27ae60',
	},
	buttonSignUp:{
		// width : 180,
		// alignItems : 'center',
		// justifyContent:'center',
		height : 55,
		margin : 15,
		borderRadius : 20,
		backgroundColor : '#234876',
	},
});