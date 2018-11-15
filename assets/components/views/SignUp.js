import React,{ Component } from 'react';
import { 
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
} from 'react-native';

import fireConection from '../connection/fire';

import { Button,Icon } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import { HeaderBackButton,Badge,NavigationActions } from 'react-navigation';


class FloatingLabel extends Component{

	constructor(props){
		super(props);
		// this.state={
		// 	isFocused :false,
		// };
	}
	
	// handleFocus = () =>this.setState( { isFocused:true });
	// handleBlur = () =>this.setState( { isFocused: false });

	render(){
		const { label, ...props }=this.props;
		// const { isFocused } = this.state;
		// const labelStyle={
		// 	marginStart : 25,
		// 	position:'absolute',
		// 	top: !isFocused ? 15 : 0,
		// 	fontSize : !isFocused ? 20 : 14,
		// 	color:!isFocused ? '#aaa': '#000',
		// };
		return(
			<View style={{padding:18}}>
				<Text>
					{label} 
				</Text>
				<TextInput
					{...props}
					style={styles.input}
				/>
			</View>
		)
	}
}

export default class SignUp extends React.Component{

constructor(props){
	super(props);
	this.state = {
		firstName:"",
		lastName:"",
		emailAddress:"",
		phoneNumber:"",
		userName:"",
		fPassword:"",
		cPassword:"",
		clientId:1,
	};
}	

radio_props = {
	data:[
		{
			label : 'Male',
			value : 'm',
			layout : 'row',
		},
		{
			label : 'Female',
			value : 'f',
			layout : 'row',
		},
   ],
};

onPress = data => this.setState({ data });

handleSubmit = () => {
	let collection = {}
	collection.fname1 = this.state.firstName,
	collection.lname = this.state.lastName,
	collection.email = this.state.emailAddress,
	collection.phone = this.state.phoneNumber,
	collection.uname = this.state.userName,
	collection.fpwd = this.state.fPassword,
	collection.cpwd = this.state.cPassword,
	console.log(collection);
	fireConection.database().ref('users_master/001').set(
		{
		  collection
		}).then(() => {
			console.log("Record Created");
			this.props.navigation.navigate('HomeButtonNav');
		}).catch((error) => {
			console.log("Insert execption : "+error);
		});
}

handleCancel = () => {
	this.props.navigation.navigate('LandingView');
}

firstNameChangeEvent=(fname)=>this.setState({firstName:fname});
lastNameChangeEvent=(lname)=>this.setState({lastName:lname});
emailAddressChangeEvent=(email)=>this.setState({emailAddress:email});
phoneNumberChangeEvent=(phone)=>this.setState({phoneNumber:phone});
userNameChangeEvent=(uname)=>this.setState({userName:uname});
fPasswordChangeEvent=(fpwd)=>this.setState({fPassword:fpwd});
cPasswordChangeEvent=(cpwd)=>this.setState({cPassword:cpwd});

	render(){
		return(
			<View style = {styles.container}>
				<ScrollView style={styles.scrollViewWrapper}>
					<KeyboardAvoidingView behavior= 'padding'>
						<FloatingLabel
							// label="FirstName"
							placeholder="firstname"
							value={this.state.firstName}
							onChangeText={this.firstNameChangeEvent}
						/>
						<FloatingLabel
							// label="LastName"
							placeholder="lastname"
							value={this.state.lastName}
							onChangeText={this.lastNameChangeEvent}
						/>
						<View style = {styles.gendersWrapper} >
							<Text style={styles.genderLabel}>Gender</Text>
							<RadioGroup radioButtons={this.radio_props.data} onPress={this.onPress} flexDirection='row' />
						</View>
						<FloatingLabel
							// label="Email Address"
							placeholder="emailAddress"
							value={this.state.emailAddress}
							onChangeText={this.emailAddressChangeEvent}
						/>
						<FloatingLabel
							// label="PhoneNumber"
							placeholder="phoneNumber"
							value={this.state.phoneNumber}
							onChangeText={this.phoneNumberChangeEvent}
						/>
						<FloatingLabel
							// label="Username"
							placeholder="username"
							value={this.state.userName}
							onChangeText={this.userNameChangeEvent}
						/>
						<FloatingLabel
							// label="Password"
							secureTextEntry
							placeholder="password"
							value={this.state.fPassword}
							onChangeText={this.fPasswordChangeEvent}
						/>
						<FloatingLabel
							// label="Confirm Password"
							secureTextEntry
							placeholder="confirm password"
							value={this.state.cPassword}
							onChangeText={this.cPasswordChangeEvent}
						/>
					</KeyboardAvoidingView>
				</ScrollView>

				<View>
					<Button
						title='+'
						color='#fff'
						fontSize={20}
						fontFamily='Roboto'
						buttonStyle={styles.submitButton}
						onPress={this.handleSubmit}
					/>
					<Button
						title='X'
						color='#fff'
						fontSize={20}
						fontFamily='Roboto'
						buttonStyle={styles.cancelButton}
						onPress={this.handleCancel}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flexGrow: 1,
		backgroundColor : '#ffff',
	},
	scrollViewWrapper:{
		flex:1,
		margin:10,
	},
	inputWrapper:{
		// height:11,
		// margin:10,
	},
	input:{
		height:45,
		// width:315,
		fontSize : 18,
		fontFamily: 'Roboto',
		letterSpacing: 0.8,
		// marginStart : 18,
		// borderBottomWidth : 2,
		// borderTopColor : '#fff',
		// borderRightColor : '#fff',
		// borderLeftColor : '#fff',	
		// borderBottomColor : '#4d4d4d',
	},
	gendersWrapper:{
		flex : 1,
		flexDirection:'row',
		alignContent : 'flex-start',
	},
	genderLabel:{
		fontSize : 18,
		marginStart : 34,
		letterSpacing: 0.8,
		fontFamily: 'Roboto',
	},
	submitButtonWrapper:{
		bottom : 149,
		flexDirection:'row',
		alignContent : 'flex-end',
	},
	submitButtonTitle:{
		color:'red',
		fontSize : 18,
		letterSpacing: 0.8,
		fontFamily: 'Roboto',
	},
	submitButton:{
		zIndex : 11,
		right : 4,
		bottom : 128,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#01579B',
	},
	cancelButton:{
		zIndex : 11,
		right : 4,
		bottom : 45,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#FF6347',
	}
});

// <View style={styles.inputWrapper}>	
						// 	<TextInput
						// 		value={this.state.lastName}
						// 		style={styles.input}
						// 		placeholder="last name"
						// 		onChangeText={this.lastNameChangeEvent}
						// 		placeholderTextColor="#234876"
						// 		underlineColorAndroid="transparent"
						// 	/>
						// </View>
						// <View style = {styles.genders} >
						// 	<Text style={styles.genderLabel}>Gender</Text>
						// 	<RadioGroup radioButtons={this.radio_props.data} onPress={this.onPress} flexDirection='row' />
						// </View>



						// userId = () => {
// 	var string = ""+num;
// 	var pad = "0000";
// 	var n = pad.substring(0,pad.length - string.length)+string;
// 	num++;
// 	console.log("cli : "+this.state.clientId);
// }


// <Text>
	// {label} 
// </Text>
// <TextInput
// 	{...props}
// 	style={styles.input}
// 	onBlur={this.handleBlur}
// 	onFocus={this.handleFocus}
// />

// fireConection.database().ref('users/003').set(
		// {
		//   collection
		// }).then(() => {
		// 	console.log("Record Created");
		// 	this.props.navigation.navigate('HomeButtonNav');
		// }).catch((error) => {
		// 	console.log("Insert execption : "+error);
		// });