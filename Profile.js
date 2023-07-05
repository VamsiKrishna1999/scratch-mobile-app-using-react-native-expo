import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const Profile = ({ navigation, route }) => {

    const { viewStyle}=styles;
    return (
        
        <View
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
              borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,borderBottomRightRadius:5,
        margin: 5,
        height:50 ,
        width: 400,
            },
          ]}>
          <View style={{flex: 1,borderTopLeftRadius: 5,borderTopRightRadius: 5, borderWidth: 1,alignContent: 'flex-start',justifyContent:'flex-start', backgroundColor: 'white'}}>
          <View style={{ borderTopColor:"white",borderTopLeftRadius: 5,borderTopRightRadius: 5,borderLeftColor:"white",backgroundColor:"white",borderWidth:1,height:50 ,width: 192,alignItems:"center",alignContent: 'center',justifyContent:'center',borderBottomLeftRadius: 5,borderBottomRightRadius:5,padding:5}}>
                <Text style={{fontWeight:"bold",fontSize:22,color:"blue"}}>Code</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Move X by 50</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Move Y by 50</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Rotate 360</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>goto(0,0)</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Move X=50 Y=50</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>go to random position</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>say Hello</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Say Hello for 1 sec</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Increase Size</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Dec Size</Text>
            </View>
            <View style={viewStyle}>
                <Text style={{fontSize:16,color:"white"}}>Repeat</Text>
            </View>
          </View>
          <View style={{flex: 1, borderTopLeftRadius: 5,borderTopRightRadius: 5,borderWidth: 1,borderLeftColor:"white", alignContent: 'flex-start',justifyContent:'flex-start', backgroundColor: 'white'}} >
            <View style={{ borderTopColor:"white",borderTopLeftRadius: 5,
        borderTopRightRadius: 5,borderLeftColor:"white",backgroundColor:"green",borderWidth:1,height:50 ,width: 192,alignItems:"center",alignContent: 'center',justifyContent:'center'}}>
                <Text style={{fontSize:22,color:"white"}}>Action</Text>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 5,
      },
      viewStyle:{
        borderTopColor:"white",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderLeftColor:"white",
        backgroundColor:"blue",
        borderWidth:1,
        height:50 ,
        width: 192,
        alignItems:"center",
        alignContent: 'center',
        justifyContent:'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,
        padding:5
      }

    });

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        //alignContent: 'space-between',
        
      },
    viewStyle1 :{
        backgroundColor: "white",
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,
        margin: 5,
        height:50 ,
        width: 400,
        justifyContent: 'center',
        shadowOpacity:1
    }
});*/


export default Profile