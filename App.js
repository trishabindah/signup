import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.redScreen}>
                    <Image
                        source={require('./assets/logo.png')}
                        style={{ width: 200, height: 200 }}
                    />
                    <View style={styles.whiteScreen}>
                        <View style={styles.loginForm}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(text) => this.setState({ text })}
                                keyboardType="email-address"
                                placeholder="Email"
                            />
                            <TouchableHighlight
                                style={styles.continue}>
                                <Text
                                    style={styles.continueText}
                                >Continue</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.or}>
                            <View style={styles.separator}/> 
                            <Text style={styles.orSpace}>Or</Text>
                            <View style={styles.separator}/> 
                        </View>
                        <View style={styles.facebookForm}>
                            <TouchableHighlight
                                style={styles.facebook}>
                                <Text
                                    style={styles.facebookText}
                                >Connect with Facebook</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    redScreen: {
        flex: 1,
        backgroundColor: '#D43939',
        alignItems: 'center',
        width: '100%'
    },
    whiteScreen: {
        flex: 2.7,
        backgroundColor: '#FFF',
        width: '100%'
    },
    loginForm: {
        flex: 1,
        //backgroundColor: '#F7F',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inputStyle: {
        height: 36,
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
    continue: {
        height: 36,
        backgroundColor: '#D43939',
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 15,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        height: 36,
        lineHeight: 36,
        color: '#FFF'
    },
    facebookForm: {
        flex: 1,
        //backgroundColor: '#FF8',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    facebook: {
        height: 36,
        backgroundColor: '#3b5998',
        borderColor: '#3b5998',
        borderWidth: 1,
        width: "90%",
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookText: {
        height: 36,
        lineHeight: 36,
        color: '#FFF'
    },
    or: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '5%'
    },
    separator: {
        borderBottomWidth: 0.5,
        borderColor: "#999",
        flexGrow: 1,
        height: 1
    },
    orSpace: {
        paddingHorizontal: '4%'
    },
});
