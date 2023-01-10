import { View, SafeAreaView, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

const SCREEN_WIDTH = Dimensions.get("window").width;
//왜 그냥 SCREEN_WIDTH = Dimension ...은 안되지??
//아 뒤에 width 추가해야되네;;;

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Gimpo</Text>
            </View>
            <ScrollView
                pagingEnabled
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
