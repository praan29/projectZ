import React,{ Component } from 'react';
import { 
		Text,
		View,
		Image,
    Switch,
		ScrollView,
		StyleSheet,
		TouchableOpacity
	} from 'react-native';

import fireConection from '../connection/fire';

export default class DashBoard extends Component{

    constructor(props){
      super(props);
      this.state = {
        userIsActive:'',
        users : []
      }
    }

    componentWillMount(){
      fireConection.database().ref('userMaster').on('value',(snapshot) => {
        let tempUsers = []

          snapshot.forEach(function(child){
            const fireBaseData = child.val();
             console.log(fireBaseData)
              let userInfo = {
                uid          : fireBaseData.userDetail.userId,
                isActive     : fireBaseData.userDetail.accStatus,
                loggedName   : fireBaseData.userDetail.uname,
                emailAddress : fireBaseData.userDetail.email,
                fullName     : fireBaseData.userDetail.fname+""+fireBaseData.userDetail.lname
              }
              tempUsers.push(userInfo);
          });
          this.setState({users:tempUsers});
          console.log(this.state.users);
          console.log(this.state.users[0].loggedName);
      });
    }

	  revenueOnPress = () =>{
    	this.props.navigation.navigate('RevenueChartItem');
  	}

  	profitOnPress = () =>{
    	this.props.navigation.navigate('ProfitChartItem');
  	}

    handleToogleSwitch = () => {
      console.log("123");
        // fireConection.database().ref('userMaster').update({

        // }.then(()=>{
        //    console.log("Record updated successfully");
        // }).catch((error)=>{
        //    // console.log("Update execption : ",error);
        // });
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
            	
      		<View style={styles.statusBar}>
        	    {
                  this.state.users.map((userData)=>{
                    return (
                       <View style={[styles.rows]}>
                          <Text style={styles.statusBarDescription} id={userData.uid}>{userData.emailAddress}</Text>
                          <Switch
                            onValueChange={this.handleToogleSwitch}
                            value={userData.accStatus}
                            activeText={'On'}
                            inActiveText={'Off'}
                            circleSize={30}
                            barHeight={1}
                            circleBorderWidth={3}
                            backgroundActive={'green'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'#30a566'}
                            circleInActiveColor={'#000000'}
                            changeValueImmediately={true}
                            changeValueImmediately={true} 
                            innerCircleStyle={{ alignItems: "right", justifyContent: "center" }}
                            outerCircleStyle={{ }} 
                            renderActiveText={false}
                            renderInActiveText={false}
                            switchLeftPx={20} 
                            switchRightPx={0} 
                            switchWidthMultiplier={2} 
                          />
                       </View>
                    );
                  })
              }

      	   </View>
    
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
   backgroundColor:'#FF9800',
 },
 ItemRight:{
   flex:1,
   padding:18,
   alignItems:'center',
   borderRadius : 20,
   backgroundColor:'#FF9800',
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

 /* STATUSBAR */
 statusBar:{
    marginTop:12,
    margin:3,
    padding:30,
    // height:60,
    flexWrap:'wrap',
    borderRadius:20,
    backgroundColor:'#FFFFFF',
 },

 rows:{
  flexDirection:'row',
  padding:8,
  // height:0,
  borderBottomWidth:1,
  borderBottomColor:'#ccc',
  
 },

 statusBarDescription:{
    marginTop:3,
    marginBottom:8,
    fontSize:16,
    fontWeight:'300',
    color:'#4d4d4d',
    letterSpacing: 1.8,
    fontFamily: 'Roboto',
    alignContent:'flex-start',
 },
 statusBarInfo:{
    right:10,
    padding:8,
    fontSize:15,
    fontWeight:'300',
    color:'#4d4d4d',
    letterSpacing: 1.2,
    alignItems:'center',
    position:'absolute',
    fontFamily: 'Roboto',
    justifyContent:'center',
 },
 statusBarSeparatorLine:{
  marginTop:8,
  borderBottomWidth:1,
  flexDirection:'column',
  borderBottomColor:'#BDBDBD',
  // backgroundColor:'#F5F5F5',
 },

 /* REVENUE BAR */
 revenueSection:{
   marginTop:12,
   margin:5,
   flexDirection:'row',
   // flexWrap:'wrap',
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
  // backgroundColor:'#FF9800',
   padding:30,
   // alignItems:'center',
   borderRadius : 20,
   // marginRight : 10,
   backgroundColor:'#FF9800',
 },
 revenueItemsRight:{
 	// flex:1,
   padding:30,
   alignItems:'center',
   borderRadius : 20,
   // marginRight : 10,
   backgroundColor:'#FF9800',
 },
barValueDescription:{
 color:'#4d4d4d',
   fontSize:18,
   fontWeight:'500',
   fontFamily: 'Roboto',
   letterSpacing: 1.4,
},
});


// if(this.state.users.length >= 1){
//   for(var ulop = 0;ulop <= this.state.users.length;ulop++){
//     <View>
//         <Text style={styles.statusBarDescription}>{this.state.users[ulop].loggedName}</Text>
//         <Text style={styles.statusBarInfo}>{this.state.users[ulop].uid}</Text>
//     </View>
//   }
// }
              
// <View style={styles.statusBarSeparatorLine}>
//     <Text style={styles.statusBarDescription}>5000 Labour Bill</Text>
//     <Text style={styles.statusBarInfo}>Paid</Text>
// </View>
// <View style={styles.statusBarSeparatorLine}>
//     <Text style={styles.statusBarDescription}>5000 Labour Bill</Text>
//     <Text style={styles.statusBarInfo}>Paid</Text>
// </View>

// <Text style={styles.statusBarInfo} id={userData.uid}>{userData.uid}</Text>


  