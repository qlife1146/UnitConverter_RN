import { View, SafeAreaView, StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
// import { Magnetometer } from "expo-sensors";
import * as Location from "expo-location";

const SCREEN_WIDTH = Dimensions.get("window").width;
//왜 그냥 SCREEN_WIDTH = Dimension ...은 안되지??
//아 뒤에 width 추가해야되네;;;

export default function App() {
    const [city, setCity] = useState("Loading...");
    const [location, setLocation] = useState(null);
    const [errMsg, setErrMsg] = useState(true);
    const ask = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        console.log("permission:", permission);
        if (!granted) {
            setErrMsg(false);
        }
        const {
            coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({ accuracy: 5 });
        const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
        setCity(location[0].city);
    };

    useEffect(() => {
        ask();
    });

    // const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    // const [subscription, setSubscription] = useState(null);
    // const _slow = () => Magnetometer.setUpdateInterval(1000);
    // const _fast = () => Magnetometer.setUpdateInterval(16);

    // const _subscribe = () =>
    //     setSubscription(
    //         Magnetometer.addListener((result) => {
    //             setData(result);
    //         })
    //     );

    // const _unsubscribe = () => {
    //     subscription && subscription.remove();
    //     setSubscription(null);
    // };

    // useEffect(() => {
    //     _subscribe();

    //     return () => {
    //         _unsubscribe();
    //     };
    // }, []);

    return (
        // <SafeAreaView>

        //         <Text>Magnetometer:</Text>
        //         <Text>x: {x}</Text>
        //         <Text>y: {y}</Text>
        //         <Text>z: {z}</Text>
        //         <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe}>
        //             <Text>{subscription ? "on" : "off"}</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={_slow}>
        //             <Text>Slow</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={_fast}>
        //             <Text>Fast</Text>
        //         </TouchableOpacity>
        // </SafeAreaView>
        <SafeAreaView style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
            </View>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                //"false"가 아니라 {false}
                horizontal
                contentContainerStyle={styles.weather}
            >
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>27℃</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    city: {
        flex: 1,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    cityName: {
        fontSize: 100,
        fontWeight: "600",
    },
    weather: {
        backgroundColor: "blue",
    },
    day: {
        width: SCREEN_WIDTH,
        alignItems: "center",
        justifyContent: "center", // 아이패드에서는 안되길래 content를 center에 맞추니 잘됐다.
    },
    temp: {
        fontSize: 200,
        fontWeight: "600",
    },
    description: {
        fontSize: 100,
        fontWeight: "400",
    },
});
