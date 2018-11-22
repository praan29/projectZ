import React, { Component } from 'react';
import {
	Text,
	View,
	Alert,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
}from 'react-native';

import {Button} from 'react-native-elements';


export default class LoginViewNew extends React.Component{
render(){
	return(
		<View style = {styles.container}>
			<View style={styles.headings}>
				<Text style={[styles.watermarker]}> Get Started </Text>
				<Text style={[styles.header]}>Login</Text>
			</View>

			<KeyboardAvoidingView behavior='padding'>
				<View style={styles.loginInputs}>

					<TextInput
						returnKeyType = "next"
						placeholder = "Email / Phone number"
						style = {styles.textBox}
						placholderTextColor = "95a5a6"
						underlineColorAndroid = "transparent"
					/>

					<TextInput
						secureTextEntry
						returnKeyType="go"
						placeholder="Password"
						style={[styles.textBox,styles.textPassword]}
						placholderTextColor= "95a5a6"
						underlineColorAndroid="transparent"
					/>

					<TouchableOpacity>
						<Text style={styles.forgetPassword}>Forget Password ?</Text>
					</TouchableOpacity>
				</View>
				

				<View styles={styles.loginActions}>
					<Button
						title='Login'
						color= '#fff'
						fontSize = {22}
						fontWeight='300'
						fontFamily= 'Roboto'
						buttonStyle={[styles.loginButton]}
						onPress={() => this.props.navigation.navigate('DashBoardView')} 	
					/>
					
					<Button
						title='Back'
						color= '#fff'
						fontSize = {22}
						fontWeight='300'
						fontFamily= 'Roboto'
						buttonStyle={[styles.backButton]}
						onPress={() =>  Alert.alert('Sign Button Clicked')} 	
					/>

				</View>
			</KeyboardAvoidingView>

		</View>
	);
}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFFF',
	},
	headings:{
		marginLeft:20,
		paddingTop : 40,
		marginVertical:18,
	},
	watermarker:{
	  	fontSize: 16,
	  	marginLeft:20,
	  	color:'#cccccc',
	    fontWeight:'300',
	    letterSpacing: 0.8,
	    fontFamily: 'Roboto',
  	},
  	header:{
  		fontSize: 35,
  		marginLeft:30,
		color:'#4d4d4d',
		fontWeight:'300',
	    fontFamily: 'Roboto',
		letterSpacing: 0.8,
  	},
  	loginInputs:{
  		margin:20,
  		paddingVertical:60,
  	},
  	textBox:{
  		color : '#4d4d4d',
		fontSize : 18,
		fontFamily : 'Roboto',
		borderBottomWidth : 2,
		borderTopColor : '#fff',
		borderRightColor : '#fff',
		borderLeftColor : '#fff',
		marginStart : 24,
		borderBottomColor : '#ece058',
  	},
  	textPassword:{
  		marginTop:30,
  	},
  	forgetPassword:{
  		fontSize : 14,
  		marginTop:25,
  		color:'#4d4d4d',
		fontFamily : 'Roboto',
		textAlign:'right',
  	},
  	loginActions:{
  		flex: 1,
		marginTop : 6,
		flexDirection : 'column',
		justifyContent:'space-around',
  	},
  	loginButton:{
  		margin:6,
  		borderRadius : 20,
  		backgroundColor:'#0062B1',
  	},
  	backButton:{
  		margin:8,
  		borderRadius : 20,
  		backgroundColor:'#FF9800',
  	}

});