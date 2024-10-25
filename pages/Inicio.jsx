
import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, View, Pressable, Image, Text, StatusBar, Linking, Dimensions } from 'react-native'
import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import huellasBoton from '../assets/images/huellitas.png';
import perroGato from '../assets/images/catDog.png'
import nombreLogo from '../assets/images/Peach and Pastel Purple Modern Coming Soon Twitter Header (1).png'

var { height } = Dimensions.get('window')
var box_count = 3;
var box_height = height / box_count;

const Inicio = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>

                <Image source={nombreLogo}
                    style={{
                        width: 350,
                        height: 200,
                        position: 'relative',
                        left: 25,
                        borderRadius: 45,

                    }}
                ></Image>
                <Image source={huellasBoton}
                    style={{
                        width: 200,
                        height: 200,
                        position: 'relative',
                        bottom: 100,
                        left: 100,
                        transform: [{ rotate: '45deg' }]
                    }}
                    resizeMode="contain"

                ></Image>

                <Pressable
                    onPress={() => navigation.navigate('vacunas')}
                    style={{
                        position: 'absolute',
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


            <View style={[styles.box, styles.box2]}>
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    position: 'absolute',
                    top: 50,
                    left: 50,
                }}>Enterate de las novedades aca!</Text>

            </View>

            <View style={[styles.box, styles.box3]}>
                <Image source={perroGato}
                    style={{
                        width: "30vh",
                        height: "40vh",
                        position: 'relative',
                        bottom: "8vh",
                        left: "5vh"

                    }}
                    resizeMode="contain"
                ></Image>

            </View>
            <StatusBar style="auto" />
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fec9c9',
        paddingTop: Constants.statusBarHeight,
        padding: 12,
    },
    box: {
        height: box_height
    },
    box1: {
        flex: .5,
        backgroundColor: "blue"
    },
    box2: {
        flex: 1,
        backgroundColor: "green"
    },
    box3: {
        flex: .3,
        backgroundColor: "red"
    }


})

export default Inicio;