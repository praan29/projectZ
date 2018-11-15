import React from 'react';
import { Component, StyleSheet,HeaderBackButton } from 'react-native';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createMaterialTopTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import LandingPage from './assets/components/views/LoginView';
import DashBoard from './assets/components/views/DashBoard';
import SignUpPage from './assets/components/views/SignUp';
import AddProject from './assets/components/views/AddProject';
import UpdateProject from './assets/components/views/UpdateProject';
import ControlPanel from './assets/components/views/ControlPanel';
import Settings from './assets/components/views/Settings';
import Switch from './assets/components/views/Switch';
import RevenuePieChart from './assets/components/views/RevenueChart';
import ProfitPieChart from './assets/components/views/ProfitChart';

export const SignUpStack = createStackNavigator({
	SignUpView :{
		screen : SignUpPage,
		navigationOptions:( { navigation } )=> ({
	   		title : 'Create Account',
	   		headerStyle: { backgroundColor: '#2980b9',height : 74,}, // Tab Header
			headerTintColor: '#fff',
			headerTitleStyle:{
				fontSize:20,fontFamily:'Roboto',color:'#fff',fontWeight:'100',letterSpacing:1.8,alignItems:'center',
			},
	   }),
	}
});

export const DashBoardTopNav = createMaterialTopTabNavigator({
	AddProject:{
		screen:AddProject,
		navigationOptions:{
			tabBarLabel : 'Add'
		}
	},
	UpdateProject:{
		screen:UpdateProject,
		navigationOptions:{
			tabBarLabel : 'Update'
		}
	},
	DashBoard:{
		screen:DashBoard,
		navigationOptions:{
			header:'DashBoard'
		}
	},
	Settings:{
		screen:Settings,
		navigationOptions:{
			header:'Settings'
		}
	},
	Switch:{
		screen:Switch,
		navigationOptions:{
			header:'Switch'
		}
	}

},{
	initialRouteName:'AddProject',
	order:['AddProject','UpdateProject','DashBoard','Settings','Switch'],
	shifiting:true,
	navigationOptions:({navigation}) =>({
		tabBarIcon:({focused,tintColor})=>{
			let iconCaption;
			const { routeName } = navigation.state;
			if (routeName === 'AddProject') {
	            iconCaption = `user`;
	        } 
	        return <Icon name='user' size={30} color="#900" />;
		}
	}),
	tabBarOptions :{
		showLabel : true,
		shifiting : true,
		activeTintColor : '#ffffff',
		inactiveTintColor : '#EDE7F6',
		indicatorStyle:{
			height : 0,
		},
		showIcon:true,
		upperCaseLabel : false,
	}
});

export const DashBoardBottomNav = createBottomTabNavigator({
	HomeButtonNav : {
		screen:DashBoardTopNav,
		navigationOptions:{
			tabBarLabel:'Home',
		}
	},
	Settings:{
		screen:Settings,
		navigationOptions:{
			tabBarLabel:'Settings',
		}
	},
	CreateAction:{
		screen:SignUpPage,
		navigationOptions:{
			tabBarLabel:'Create',
		}
	}

},{
	initialRouteName:'HomeButtonNav',
	order:['HomeButtonNav','Settings','CreateAction'],
	shifiting:true,
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
        	let iconName;
        	const { routeName } = navigation.state;
	        if (routeName === 'HomeButtonNav') {
	            iconName = `ios-home${focused ? '' : '-outline'}`;
	        } 

	        return <Icon name='user' size={30} color="#900" />;
      	},
    }),
	tabBarOptions:{
		showLabel: true,
		activeTintColor : '#ffffff',
		inactiveTintColor : '#EDE7F6',
		style: {
            backgroundColor: '#2980b9' // TabBar background
        },
        showIcon:true,

	},

});


export const RevenueChartView = createStackNavigator({
	RChart :{
		screen : RevenuePieChart,
		navigationOptions: ( { navigation } )=> ({
			title : 'Revenue Chart',
			headerStyle: { backgroundColor: '#2980b9',height : 80,}, // Tab Header
			headerTintColor: '#fff',
			headerTitleStyle:{
				fontSize:20,fontFamily:'Roboto',color:'#fff',fontWeigth:'100',letterSpacing:1.8,
			},
			// headerLeft: <HeaderBackButton onPress={() => this.navigation.goBack(null)} />,
	 		// headerLeft : <DrawerIcon navigation = { navigation } />,
 		}),
	}
});

export const ProfitChartView = createStackNavigator({
	PChart :{
		screen : ProfitPieChart,
		navigationOptions: ( { navigation } )=> ({
			title : 'Profit Chart',
			headerStyle: { backgroundColor: '#2980b9',height : 80,}, // Tab Header
			headerTintColor: '#fff',
			headerTitleStyle:{
				fontSize:20,fontFamily:'Roboto',color:'#fff',fontWeigth:'100',letterSpacing:1.8,
			},
			// headerLeft: <HeaderBackButton onPress={() => this.navigation.goBack(null)} />,
	 		// headerLeft : <DrawerIcon navigation = { navigation } />,
 		}),
	}
});

export const RootStackNavigator = (userSession =false) =>{
	return createStackNavigator(
	{
		LandingView:{
			screen : LandingPage,
			navigationOptions:{
				header:null
			}
		},
		DashBoardView:{
			screen : DashBoardBottomNav,
			navigationOptions:{
				header :null
			}
		},
		SignUpView:{
			screen:SignUpStack,
			navigationOptions:{
				header:null
			}
		},
		RevenueChartItem:{
			screen:RevenueChartView,
		},
		ProfitChartItem:{
			screen:ProfitChartView,
		},
	},{
		headerMode : 'none',
		initialRouteName : userSession ? "DashBoardView" : "LandingView"
	});
}




const style = StyleSheet.create({
icons :{
		padding : 0,
		right : 7,
		color : '#7f8c8d',
		paddingVertical : 5,
		position: 'absolute',
	},
});