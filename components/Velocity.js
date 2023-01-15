import { View, TextInput, StyleSheet, Text } from "react-native";
import * as React from "react";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import convert from "convert-units";

export default function Velocity() {
    const units = convert().possibilities("speed");
    const [selectedTop, setSelectedTop] = useState(units[0]);
    const [selectedBottom, setSelectedBottom] = useState(units[0]);
    const [textTop, setTextTop] = useState(1);
    const [valueConverted, setValueConverted] = useState(0);

    useEffect(() => {
        setValueConverted(convert(+textTop).from(selectedTop).to(selectedBottom).toFixed(5));
    }, [textTop, selectedTop, selectedBottom]);

    return (
        <View style={styles.layout}>
            <View style={styles.row}>
                <TextInput
                    style={styles.textBox}
                    value={textTop}
                    onChangeText={setTextTop}
                    keyboardType="number-pad"
                    multiline={false}
                    maxLength={13}
                />
                <Picker
                    style={styles.pickerBox}
                    selectedValue={selectedTop}
                    onValueChange={setSelectedTop}
                >
                    {units.map((unit, i) => (
                        <Picker.Item
                            style={styles.pickerBoxText}
                            label={unit}
                            value={unit}
                            key={i}
                        />
                    ))}
                </Picker>
            </View>
            <View style={styles.row}>
                <Text
                    style={styles.textBox}
                    multiline={false}
                >
                    {0 ? 0.0 : valueConverted}
                </Text>
                <Picker
                    style={styles.pickerBox}
                    selectedValue={selectedBottom}
                    onValueChange={setSelectedBottom}
                >
                    {units.map((unit, i) => (
                        <Picker.Item
                            style={styles.pickerBoxText}
                            label={unit}
                            value={unit}
                            key={i}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textBox: {
        marginLeft: 10,
        fontSize: 40,
        flex: 3,
        textAlign: "right",
        borderBottomWidth: 1,
    },
    pickerBox: {
        borderBottomWidth: 1,
        flex: 1,
    },
    pickerBoxText: {
        fontSize: 20,
        textAlignVertical: "bottom",
    },
});
