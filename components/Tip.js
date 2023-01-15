import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import * as React from "react";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

export default function Tip() {
    // const units = convert().possibilities("time");
    // const [selectedTop, setSelectedTop] = useState(units[0]);
    // const [selectedBottom, setSelectedBottom] = useState(units[0]);
    // const [textTop, setTextTop] = useState(1);
    // const [valueConverted, setValueConverted] = useState(0);
    const [pay, setPay] = useState(0);
    const [selectedPercentage, setSelectedPercentage] = useState(5);
    const [selectedPerson, setSelectedPerson] = useState(1);
    const [tipPay, setTipPay] = useState(); //팁 금액
    const [totalPay, setTotalPay] = useState(); //팁 포함 지불 금액
    const [divPay, setDivPay] = useState(); //인당 지불 금액

    const pickerItems0to100 = Array.from({ length: 101 }, (_, i) => i).map((val) => (
        <Picker.Item
            key={val}
            label={val.toString()}
            value={val}
        />
    ));

    const pickerItems1to99 = Array.from({ length: 99 }, (_, i) => i + 1).map((val) => (
        <Picker.Item
            key={val}
            label={val.toString()}
            value={val}
        />
    ));

    useEffect(() => {
        setTipPay(parseFloat(pay) * selectedPercentage * 0.01);
        setTotalPay(parseFloat(tipPay) + parseFloat(pay));
        setDivPay(totalPay / parseFloat(selectedPerson));
    }, [pay, selectedPercentage, selectedPerson]);

    return (
        <View style={styles.layout}>
            <View style={styles.row}>
                <Text style={styles.textBoxLeft}>소계</Text>
                <TextInput
                    style={styles.textBoxRight}
                    value={pay}
                    onChangeText={setPay}
                    keyboardType="number-pad"
                    multiline={false}
                    maxLength={13}
                />
            </View>

            <View style={styles.tipRow}>
                <Picker
                    mode="dropdown"
                    style={styles.tipPicker}
                    selectedValue={selectedPercentage}
                    onValueChange={(itemValue, itemIndex) => setSelectedPercentage(itemValue)}
                >
                    {pickerItems0to100}
                </Picker>
                <Text style={styles.tipTextPer}>%</Text>
                <Text style={styles.tipTextBox}>
                    {tipPay}
                    {"\n"}팁 금액
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.totalBoxLeft}>전체</Text>
                <Text style={styles.totalBoxRight}>{totalPay}</Text>
            </View>
            <View style={styles.row}>
                <Picker
                    style={styles.perPicker}
                    mode="dropdown"
                    selectedValue={selectedPerson}
                    onValueChange={(itemValue, itemIndex) => setSelectedPerson(itemValue)}
                >
                    {pickerItems1to99}
                </Picker>
                <Text style={styles.perTextPay}>
                    {divPay}
                    {"\n"}인당
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    col: {
        flexDirection: "column",
    },
    textBoxLeft: {
        flex: 1,
        textAlignVertical: "center",
        fontSize: 30,
    },
    textBoxRight: {
        flex: 2.5,
        textAlign: "right",
        backgroundColor: "#f0f0f0",
        fontSize: 30,
    },

    tipCol: {
        flexDirection: "column",
    },
    tipRow: {
        flexDirection: "row",
        marginBottom: 10,
    },
    tipPicker: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    tipTextPer: {
        flex: 1,
        // textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
    },
    tipTextBox: {
        flex: 1.4,
        textAlignVertical: "center",
        textAlign: "right",
        marginRight: 10,
        fontSize: 20,
    },
    totalBoxLeft: {
        flex: 1,
        textAlignVertical: "center",
        fontSize: 30,
    },
    totalBoxRight: {
        flex: 2.5,
        textAlign: "right",
        fontSize: 30,
    },
    perPicker: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    perTextPay: {
        flex: 2.5,
        textAlign: "right",
        fontSize: 30,
    },
});
