import React,{ Component } from 'react';
import { 
		Text,
		View,
		Image,
		ScrollView,
		StyleSheet,
		TouchableOpacity
	} from 'react-native';

export default class DashBoard extends Component{


	  revenueOnPress = () =>{
    	this.props.navigation.navigate('RevenueChartItem');
  	}

  	profitOnPress = () =>{
    	this.props.navigation.navigate('ProfitChartItem');
  	}

	render(){
		return(
			<ScrollView style = {styles.ScrollContainer}>
				<View style={styles.bar}>
					<View style={[styles.ItemLeft,styles.Separator]}>
		                <Text style={styles.Description}>Expences</Text>
		                <Text style={styles.Content}>10,28,456</Text>
		                <View style={styles.TranscationIcon}>
                    		
                		</View>
           			 </View>
				
					<View style={styles.ItemRight}>
		                <Text style={styles.Description}>PendingBills</Text>
		                <Text style={styles.Content}>1,24,123</Text>
	                	<View style={styles.TranscationIcon}>
	                    
	                	</View>
	            	</View>
            	</View>
            	
            	<ScrollView style = {styles.ScrollContainer}>
            		<View style={styles.Status}>
            			<View>
							<Text style={styles.StatusDescription}>5000 Labour Bill</Text>
			          		<Text style={styles.StatusInfo}>Paid</Text>
			         	</View>
			         	<View style={styles.StatusInfoSeparator}>
							<Text style={styles.StatusDescription}>5000 Labour Bill</Text>
			          		<Text style={styles.StatusInfo}>Paid</Text>
			         	</View>
			         	<View style={styles.StatusInfoSeparator}>
							<Text style={styles.StatusDescription}>5000 Labour Bill</Text>
			          		<Text style={styles.StatusInfo}>Paid</Text>
			         	</View>
			      	</View>
			    </ScrollView>
       
        		<View style={styles.revenueSection}>
		            <TouchableOpacity onPress={this.revenueOnPress} style={styles.revenueItems}>
		              <View style={styles.revenueItemsLeft}>
		                  <Text style={styles.barValueDescription}>Revenue</Text>
		                  <Text style={styles.Content}>10,28,456</Text>
		                  <View style={styles.transIcons}>
		                   
		                </View>
		              </View>
		            </TouchableOpacity>

		            <TouchableOpacity onPress={this.profitOnPress} style={styles.revenueItems}>
		              <View style={styles.revenueItemsRight}>
		                  <Text style={styles.barValueDescription}>Profit</Text>
		                  <Text style={styles.Content}>10,28,456</Text>
		                  <View style={styles.transIcons}>
		                    
		                </View>
		              </View>
		            </TouchableOpacity>
        		</View>



			</ScrollView>

		);
	}
}


const styles = StyleSheet.create({
 ScrollContainer:{
		margin:5
 },
 bar:{
    // borderTopColor:'#BDBDBD',
    // borderTopWidth:1,
    margin:3,
    flexDirection:'row',
 },
 TranscationIcon:{
	    position : 'absolute',
	    top:20,
	    bottom:10,
	    right:12,
 },
 ItemLeft:{
   flex:1,
   padding:18,
   alignItems:'center',
   borderRadius : 20,
   marginRight : 10,
   backgroundColor:'#64B5F6',
 },
 ItemRight:{
   flex:1,
   padding:18,
   alignItems:'center',
   borderRadius : 20,
   backgroundColor:'#64B5F6',
 },
 Separator:{
   // borderRightWidth:5,
   // borderRightColor:'#FFFFFF'
   // borderRightColor:'#BDBDBD',
 },
 Description:{
   color:'#4d4d4d',
   fontSize:18,
   fontWeight:'500',
   fontFamily: 'Roboto',
   letterSpacing: 1.4,
 },
 Content:{
  fontSize:18,
  marginTop:10,
  color:'#004D40',
  fontFamily: 'Roboto',
  letterSpacing: 1.2,
 },
 Status:{
  margin:3,
  padding:30,
  // height:60,
  flexWrap:'wrap',
  borderRadius:20,
  backgroundColor:'#64B5F6',
 },
 StatusDescription:{
  marginTop:8,
  fontSize:16,
  fontWeight:'500',
  color:'#4d4d4d',
  letterSpacing: 1.2,
  fontFamily: 'Roboto',
  alignContent:'flex-start',
 },
 StatusInfo:{
  top:2,
  right:10,
  padding:8,
  alignItems:'center',
  position:'absolute',
  letterSpacing: 1.2,
  fontFamily: 'Roboto',
  justifyContent:'center',
 },
 StatusInfoSeparator:{
  marginTop:12,
  borderTopColor:'#BDBDBD',
  borderTopWidth:1,
  flexDirection:'column',
  // backgroundColor:'#F5F5F5',
 },
 revenueSection:{
   margin:3,
   flexDirection:'row',
  // margin:5,
   flexWrap:'wrap',
  // flexDirection:'row',
  // borderTopColor:'#BDBDBD',
  // borderTopWidth:1,
  // backgroundColor:'#F5F5F5',
  // padding:10,
 },
 revenueItems:{
  flex:1,
  alignItems:'center',
  // padding:18,
 },
 revenueItemsLeft:{
  // flex:1,
  // padding:40,
  // alignItems:'center',
  // borderRadius : 20,
  // // margin : 10,
  // backgroundColor:'#64B5F6',
   padding:30,
   // alignItems:'center',
   borderRadius : 20,
   // marginRight : 10,
   backgroundColor:'#64B5F6',
 },
 revenueItemsRight:{
 	// flex:1,
   padding:30,
   alignItems:'center',
   borderRadius : 20,
   // marginRight : 10,
   backgroundColor:'#64B5F6',
 },
barValueDescription:{
 color:'#4d4d4d',
   fontSize:18,
   fontWeight:'500',
   fontFamily: 'Roboto',
   letterSpacing: 1.4,
},
});