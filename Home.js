import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { name: 'Full Stack Dev', age: 25, email: 'test@test.com' })}>
                <Text style={styles.textStyling}>Redirect To Details</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyling:{
        fontSize : 16,
        fontWeight: 'bold',
        color : 'white',
    },
})

export default Home