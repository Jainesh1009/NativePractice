import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// Import image
import logo from '../Images/logo1.png';
import bg1 from '../Images/bg1.png';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            navigation.navigate('Home');
          }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={bg1} style={styles.bgLogo} />
                <Image source={logo} style={styles.logo} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    logoContainer: {
        //flex: 0.6, // Take 60% of the available vertical space
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 70,
    },
    bgLogo: {
        position: 'absolute',
        //width: 400,
        height: 350,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16, // Adjust the font size
        backgroundColor: '#f8f8f8', // Add a background color
        color: '#000634'
    },
    button: {
        backgroundColor: '#005FA9',
        borderRadius: 10,
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingVertical: 20,
        //paddingHorizontal: 40
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Login;
