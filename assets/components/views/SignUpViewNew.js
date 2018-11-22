import React, { Component } from 'react';
import {
		Text,
		View,
		Alert,
		TextInput,
		StyleSheet,
		ScrollView,
		SafeAreaView,
		TouchableOpacity,
		KeyboardAvoidingView,
}from 'react-native';

import fireConection from '../connection/fire';
import { Button } from 'react-native-elements';

export default class SignUpViewNew extends React.Component{

constructor(props){
	super(props);
	this.state = {
		firstName:"",
		lastName:"",
		emailAddress:"",
		mobileNumber:"",
		userName:"",
		fPassword:"",
		cPassword:"",
		accStatus:"",
		fireBaseClientId:"",
	};
}	

// radio buttons
	// radio_props = {
	// 	data:[
	// 		{
	// 			label : 'Male',
	// 			value : 'm',
	// 			layout : 'row',
	// 		},
	// 		{
	// 			label : 'Female',
	// 			value : 'f',
	// 			layout : 'row',
	// 		},
	//    ],
	// };

onPress = data => this.setState({ data });
      
componentWillMount(){
		var user_id = "";
		fireConection.database().ref('userMaster').on('value',(data) => {
			this.state.fireBaseClientId = data.numChildren();
			user_id = this.state.fireBaseClientId;
		
			if(user_id > 0){
				user_id = user_id + 1;
					if(user_id <= 9){
						user_id = "0" + user_id;
					}
			}else if(user_id <= 0){
					user_id = "01";
			}
			this.state.fireBaseClientId = user_id;
		});
}

// form submit
handleSubmitEvent = () =>{
	let userDetail = {}
	if(this.state.firstName && this.state.lastName
		&& this.state.emailAddress && this.state.mobileNumber 
		&& this.state.userName && this.state.fPassword && this.state.cPassword){
			userDetail.accStatus = 0,
			userDetail.userId = this.state.fireBaseClientId,
			userDetail.fname = this.state.firstName,
			userDetail.lname = this.state.lastName,
			userDetail.email = this.state.emailAddress,
			userDetail.phone = this.state.mobileNumber,
			userDetail.uname = this.state.userName,
			userDetail.fpwd = this.state.fPassword,
			userDetail.cpwd = this.state.cPassword,
		fireConection.database().ref('userMaster/').push(
		{
		  userDetail
		}).then(() => {
			console.log("Record Created");
			this.props.navigation.navigate('HomeButtonNav');
		}).catch((error) => {
			console.log("Insert exception : "+error);
		});
	}else{
		Alert.alert('Check ');
	}
}

// Onchange events
firstNameChangeEvent=(fname)=>this.setState({firstName:fname});
lastNameChangeEvent=(lname)=>this.setState({lastName:lname});
emailAddressChangeEvent=(email)=>this.setState({emailAddress:email});
mobileNumberChangeEvent=(phone)=>this.setState({mobileNumber:phone});
userNameChangeEvent=(uname)=>this.setState({userName:uname});
fPasswordChangeEvent=(fpwd)=>this.setState({fPassword:fpwd});
cPasswordChangeEvent=(cpwd)=>this.setState({cPassword:cpwd});


render(){
	return(
		<View style = {styles.container}>

			<View style={styles.headings}>
				<Text style={[styles.watermarker]}></Text>
				<Text style={[styles.header]}>Create Account</Text>
			</View>

			<SafeAreaView style={{flex:1}}>
				<ScrollView style={styles.scrollBar}>

					<KeyboardAvoidingView behavior="padding">
						
						<View style={[styles.inputs,styles.inputsWrapper]}>
							
							<TextInput
								returnKeyType = "next"
								placeholder = "Firstname"
								style = {styles.textBox}
								value={this.state.firstName}
								placholderTextColor = "95a5a6"
								onChangeText={this.firstNameChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								returnKeyType = "next"
								placeholder = "Lastname"
								style = {styles.textBox}
								value={this.state.lastName}
								placholderTextColor = "95a5a6"
								onChangeText={this.lastNameChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								returnKeyType = "next"
								placeholder = "Email Address"
								style = {styles.textBox}
								value={this.state.emailAddress}
								placholderTextColor = "95a5a6"
								onChangeText={this.emailAddressChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								returnKeyType = "next"
								placeholder = "MobileNumber"
								style = {styles.textBox}
								value={this.state.mobileNumber}
								placholderTextColor = "95a5a6"
								onChangeText={this.mobileNumberChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								returnKeyType = "next"
								placeholder = "Username"
								style = {styles.textBox}
								value={this.state.userName}
								placholderTextColor = "95a5a6"
								onChangeText={this.userNameChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								secureTextEntry
								returnKeyType = "go"
								placeholder = "Password"
								value={this.state.fPassword}
								style = {styles.textBox}
								placholderTextColor = "95a5a6"
								onChangeText={this.fPasswordChangeEvent}
								underlineColorAndroid = "transparent"
							/>

							<TextInput
								secureTextEntry
								returnKeyType = "go"
								placeholder = "Confirm Password"
								style = {styles.textBox}
								value={this.state.cPassword}
								placholderTextColor = "95a5a6"
								onChangeText={this.cPasswordChangeEvent}
								underlineColorAndroid = "transparent"
							/>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</SafeAreaView>

			<View style={styles.actionButtons}>
				<Button
					title='+'
					color='#fff'
					fontSize={20}
					fontFamily='Roboto'
					buttonStyle={styles.submitButton}
					onPress={this.handleSubmitEvent}
				/>	
				<Button
					title='X'
					color='#fff'
					fontSize={20}
					fontFamily='Roboto'
					buttonStyle={styles.cancelButton}
					onPress={this.handleCancelEvent}
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
	headings:{
		marginLeft:20,
		paddingTop : 60,
		// marginVertical:18,
	},
  	header:{
  		fontSize:22,
  		marginLeft:20,
		color:'#4d4d4d',
		fontWeight:'300',
	    fontFamily: 'Roboto',
		letterSpacing: 0.8,
  	},
	watermarker:{
	  	fontSize: 16,
	  	marginLeft:20,
	  	color:'#cccccc',
	    fontWeight:'300',
	    letterSpacing: 0.8,
	    fontFamily: 'Roboto',
  	},
  	scrollBar:{
  		margin:10,
  	},
  	inputs:{
		// margin:10,
  		// paddingVertical:60,
  	},
  	inputsWrapper:{
  		margin:10,
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
		marginTop:30,
		borderBottomColor : '#ece058',
  	},
  	submitButton:{
  		zIndex : 11,
		right : 4,
		bottom : 100,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#0062B1',
  	},
  	cancelButton:{
  		zIndex : 11,
		right : 4,
		bottom : 20,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#FF9800',
  	}

});


// <View style={styles.headings}>
// 	<Text style={[styles.watermarker]}></Text>
// 	<Text style={[styles.header]}>Create Account</Text>
// </View>
