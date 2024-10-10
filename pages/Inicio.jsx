
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
                top: 500,
                left: 250,


            }}>Enterate de las novedades aca!</Text>

            <StatusBar style="auto" />
            <Image source={perroGato}
                style={{
                    width: 400,
                    height: 400,
                    Image,
                    position: 'absolute',
                    bottom: -135,
                    left: 220
                }}
                resizeMode="contain"
            ></Image>

            <Image source={huellasBoton}
                style={{
                    width: 200,
                    height: 200,
                    position: 'relative',
                    top: 75,
                    left: 1,
                    transform: [{ rotate: '45deg' }]
                }}
                resizeMode="contain"

            ></Image>

            <Image source={nombreLogo}
                style={{
                    width: 500,
                    height: 300,
                    position: 'relative',
                    top: -180,
                    left: 220,
                    borderRadius: 45,
                }}
            ></Image>


            <Pressable
                onPress={() => navigation.navigate('vacunas')}
                style={{
                    position: 'absolute',
                    top: 250,
                    left: 275,
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
                }}>
                    Vacunas
                </Text>

            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('agenda')}
                style={{
                    position: 'absolute',
                    top: 250,
                    right: 360,
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
                onPress={() => Linking.openURL('https://bit.ly/3XYBAtP')}
                style={{
                    position: 'absolute',
                    top: 250,
                    right: 200,
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
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fec9c9',

        paddingTop: Constants.statusBarHeight,
        padding: 12,
    },
})

export default Inicio;