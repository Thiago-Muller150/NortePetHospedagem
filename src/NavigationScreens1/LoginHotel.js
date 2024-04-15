import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const LoginHotel = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <Button
            style={styles.returnButton}
            labelStyle={styles.textReturnButton}
            icon="keyboard-backspace"
            mode="text"
            onPress={() => navigation.navigate('IntroScreen3')}>
                Voltar
            </Button>
            <View style={styles.hotelIconView}>
                <Image source={require('../../assets/images/logoHotel.png')} style={styles.hotelIcon}/>
            </View>
            <Text style={styles.containerText}>
                Login
            </Text>
            <Text style={styles.containerTextAlt}>
                Email
            </Text>
            <SafeAreaView style={styles.inputTextBox}>
                <TextInput
                    style={styles.textInput}
                    outlineColor='#000'
                    cursorColor='#000'
                    selectionColor='#000'
                    underlineColor='#000'
                    activeUnderlineColor='#000'
                    activeOutlineColor='#000'
                    placeholder='hotel@gmail.com'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                Senha
            </Text>
            <SafeAreaView style={styles.inputTextBox}>
                <TextInput
                    style={styles.textInput}
                    outlineColor='#000'
                    cursorColor='#000'
                    selectionColor='#000'
                    underlineColor='#000'
                    activeUnderlineColor='#000'
                    activeOutlineColor='#000'
                    placeholder='********'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.continueButtonContainer}>
                <Button
                buttonColor='#904500'
                style={{borderRadius: 4}}
                labelStyle={styles.textContinueButton}
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate('HomeHotel')}>
                    Entrar
                </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonRowContainer}>
                <Button
                labelStyle={styles.textButtonRow}
                textColor='#000'
                mode="text"
                onPress={() => navigation.navigate('PasswordRecovery')}>
                    Esqueçeu a senha?
                </Button>
                <Button
                labelStyle={styles.textButtonRow}
                textColor='#000'
                mode="text"
                onPress={() => navigation.navigate('RegisterHotel')}>
                    Criar uma conta
                </Button>
            </SafeAreaView>
            <SafeAreaView pointerEvents='none' style={styles.bottomImageView}>
                <Image source={require('../../assets/images/screenBttmIntro.png')} style={styles.bottomImage}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#d39C69',
    },
    returnButton: {
        marginRight: 285,
        marginTop: 25,
        left: 10,
    },
    textReturnButton: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    hotelIconView: {
        paddingHorizontal: 100,
        paddingTop: 25,
    },
    hotelIcon: {
        aspectRatio: 1,
    },
    containerText: {
        paddingHorizontal: 50,
        fontFamily: 'InterRegular',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    containerTextAlt: {
        paddingHorizontal: 50,
        fontFamily: 'InterRegular',
        fontWeight: '600',
        fontSize: 20,
    },
    inputTextBox: {
        paddingVertical: 5,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textInput: {
        backgroundColor: '#fff',
        fontFamily: 'InterRegular',
        fontSize: 20,
    },
    continueButtonContainer: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textContinueButton: {
        fontFamily: 'InterRegular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 35,
    },
    textButtonRow: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    bottomImageView: {
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '18%',
    },
    bottomImage: {
        width: '100%',
        height: '155%',
        top: '60%',
    },
})

export default LoginHotel;