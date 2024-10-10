
import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, View, Pressable, Image, Text, StatusBar, Linking } from 'react-native'
import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import huellasBoton from '../assets/images/huellitas.png';
import perroGato from '../assets/images/catDog.png'
import nombreLogo from '../assets/images/Peach and Pastel Purple Modern Coming Soon Twitter Header (1).png'


const Inicio = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>



            <Text style={{
                color: 'white',
                fontSize: 30,
                position: 'absolute',
                top: 425,
                justifyContent: 'center',


            }}>Enterate de las novedades aca!</Text>

            <StatusBar style="auto" />
            <Image source={perroGato}
                style={{
                    width: 750,
                    height: 500,
                    position: 'absolute',
                    bottom: -135,
                    left: 80


                }}></Image>

            <Image source={huellasBoton}
                style={{
                    width: 200,
                    height: 200,
                    position: 'relative',
                    top: 200,
                    left: -250,
                    transform: [{ rotate: '45deg' }]

                }}></Image>

            <Image source={nombreLogo}
                style={{
                    width: 500,
                    height: 300,
                    position: 'relative',
                    top: -395,
                    left: 0,
                    borderRadius: 45,
                }}></Image>

            <View>
                <Pressable
                    onPress={() => navigation.navigate('vacunas')}
                    style={{
                        position: 'absolute',
                        top: 240,
                        left: 240,
                        width: 100,
                        height: 50,
                        borderWidth: 2,
                        borderColor: 'red',
                        backgroundColor: '#7c8efc',
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>
                        Vacunas
                    </Text>

                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('agenda')}
                    style={{
                        position: 'absolute',
                        top: 240,
                        right: 390,
                        width: 100,
                        height: 50,
                        backgroundColor: '#7c8efc',
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Agenda</Text>
                </Pressable>

                <Pressable
                    onPress={() => Linking.openURL('http://senasa.com')}
                    style={{
                        position: 'absolute',
                        top: 240,
                        right: 240,
                        width: 100,
                        height: 50,
                        backgroundColor: '#7c8efc',
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20
                    }}>SENASA</Text>
                </Pressable>

            </View>
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fec9c9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 12,
    },
})

export default Inicio;