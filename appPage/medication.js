import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Icon from 'react-native-vector-icons/AntDesign';

//Storage Key for Async Storage
const STORAGE_KEY_MORNING = '@save_mor';
const STORAGE_KEY_AFTERNOON = '@save_aft';
const STORAGE_KEY_NIGHT = '@save_night';

//==========================================================================================
// const begins here
//==========================================================================================

const Medication = ({ navigation }) => {

    //==========================================================================================
    // storage
    //==========================================================================================

    //Set State for Async Storage
    const [morning, setMorning] = useState('');
    const [afternoon, setAfternoon] = useState('');
    const [night, setNight] = useState('');

    /* Save data into Async Storage */
    const saveData = async () => {

        try {
            await AsyncStorage.setItem(STORAGE_KEY_MORNING, morning);
            await AsyncStorage.setItem(STORAGE_KEY_AFTERNOON, afternoon);
            await AsyncStorage.setItem(STORAGE_KEY_NIGHT, night);

            alert('Data successfully saved');

        } catch (e) {
            alert('Failed to save the data to the storage');
        }

    };

    /* Read data from Async Storage */
    const readData = async () => {
        try {
            const morMed = await AsyncStorage.getItem(STORAGE_KEY_MORNING);
            const aftMed = await AsyncStorage.getItem(STORAGE_KEY_AFTERNOON);
            const nightMed = await AsyncStorage.getItem(STORAGE_KEY_NIGHT);

            if (morMed !== null) {
                setMorning(morMed);
            }

            if (aftMed !== null) {
                setAfternoon(aftMed);
            }

            if (nightMed !== null) {
                setNight(nightMed);
            }

        } catch (e) {
            alert('Failed to fetch the data from storage');
        }
    };

    useEffect(() => {
        readData();
    }, []);

    // Clear data warning
    const clearWarning = () =>
        Alert.alert(
            "Alert",
            "Are you sure you want to delete all your data?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "DELETE", onPress: clearStorage }
            ]
        );

    /* Clear data from Async Storage */
    const clearStorage = async () => {
        try {
            //await AsyncStorage.clear();
            await AsyncStorage.removeItem('@save_mor');
            await AsyncStorage.removeItem('@save_aft');
            await AsyncStorage.removeItem('@save_night');

            setMorning('');
            setAfternoon('');
            setNight('');

            alert('Storage successfully cleared!');
        } catch (e) {
            alert('Failed to clear the async storage.');
        }
    };

    const onChangeMorning = (morMed) => setMorning(morMed);
    const onChangeAfternoon = (aftMed) => setAfternoon(aftMed);
    const onChangeNight = (nightMed) => setNight(nightMed);

    const onSubmitEditing = () => {
        if (
            !morning &&
            !afternoon &&
            !night
        )
            return;

        saveData(morning, afternoon, night);

        setMorning('');
        setAfternoon('');
        setNight('');

    };

    //==========================================================================================
    // Date
    //==========================================================================================

    //Date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (dateOB) => {
        setDateOB(dateOB);
        hideDatePicker();
    };

    const getDate = () => {
        let tempDate = dateOB.toString().split(' ');
        return dateOB !== ''
            ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
            : '';
    };

    //==========================================================================================
    // return
    //==========================================================================================

    return (

        <ScrollView style={styles.container}>

            <Text style={styles.title3}>Morning</Text>
            <TextInput
                multiline
                style={styles.inputII}
                placeholder="Your medication to intake during morning time..."
                keyboardType="default"
                value={morning}
                onChangeText={onChangeMorning}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title3}>Afternoon</Text>
            <TextInput
                multiline
                style={styles.inputII}
                placeholder="Your medication to intake during afternoon time..."
                keyboardType="default"
                value={afternoon}
                onChangeText={onChangeAfternoon}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title3}>Night</Text>
            <TextInput
                multiline
                style={styles.inputII}
                placeholder="Your medication to intake during night time..."
                keyboardType="default"
                value={night}
                onChangeText={onChangeNight}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title3}>Note</Text>
            <Text style={{ marginLeft: 5, fontSize: 16, color:'black' }}>Please do not consume medication and alcohol at the same time.</Text>

            <View style={styles.buttonArea}>

                <TouchableOpacity onPress={clearWarning} style={styles.clearButton}>
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={saveData} style={styles.startButton}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>

            </View>

            <Text>{"\n"}</Text>

        </ScrollView>
    );
};

export default Medication;