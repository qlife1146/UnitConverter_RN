import * as React from "react";
import { StatusBar, StyleSheet, View, useWindowDimensions, SafeAreaView, Text } from "react-native";
import { TabView, TabBar, scrollPager } from "react-native-tab-view";
import Area from "./components/Area";
import Length from "./components/Length";
import Temperature from "./components/Temperature";
import Volume from "./components/Volume";
import Weight from "./components/Weight";
import Data from "./components/Data";
import Velocity from "./components/Velocity";
import Time from "./components/Time";
import Tip from "./components/Tip";

export default function App() {
    const layout = useWindowDimensions(); //for tab bar width

    const [index, setIndex] = React.useState(0); //위치 index
    const [routes] = React.useState([
        { key: "Area", title: "면적" },
        { key: "Length", title: "길이" },
        { key: "Temperature", title: "온도" },
        { key: "Volume", title: "부피" },
        { key: "Weight", title: "무게" },
        { key: "Data", title: "데이터" },
        { key: "Velocity", title: "속도" },
        { key: "Time", title: "시간" },
        { key: "Tip", title: "팁" },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text> h </Text> */}
            <TabView
                renderPager={(props) =>
                    Platform.OS === "ios" ? (
                        <ScrollPager {...props} />
                    ) : (
                        <ViewPagerAdapter
                            {...props}
                            transition="curl"
                            showPageIndicator
                        />
                    )
                }
                navigationState={{ index, routes }}
                // renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                scrollEnabled={true}
                animationEnabled={true}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        scrollEnabled
                        tabStyle={{ width: "auto" }}
                    />
                )}
                renderScene={({ route }) => {
                    switch (route.key) {
                        case "Area":
                            return <Area />;
                        case "Data":
                            return <Data />;
                        case "Length":
                            return <Length />;
                        case "Temperature":
                            return <Temperature />;
                        case "Time":
                            return <Time />;
                        case "Tip":
                            return <Tip />;
                        case "Velocity":
                            return <Velocity />;
                        case "Volume":
                            return <Volume />;
                        case "Weight":
                            return <Weight />;
                        default:
                            break;
                    }
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
