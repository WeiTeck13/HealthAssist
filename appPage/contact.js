import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import call from 'react-native-phone-call';

//Storage Key for Async Storage
const STORAGE_KEY_FAMNAME = '@save_famname';
const STORAGE_KEY_FAM = '@save_fam';
const STORAGE_KEY_FAMADD = '@save_famAdd';
const STORAGE_KEY_DOC = '@save_doc';
const STORAGE_KEY_DOCNAME = '@save_docname';
const STORAGE_KEY_DOCADD = '@save_docAdd';


//==========================================================================================
// const begins here
//==========================================================================================

const Contact = ({ navigation }) => {


    //==========================================================================================
    // storage
    //==========================================================================================

    //Set State for Async Storage
    const [famname, setFamName] = useState('')
    const [fam, setFam] = useState('');
    const [famAdd, setFamAdd] = useState('');
    const [doc, setDoc] = useState('');
    const [docName, setDocName] = useState('');
    const [docAdd, setDocAdd] = useState('');

    /* Save data into Async Storage */
    const saveData = async () => {

        if (!fam.trim()) {

            alert('Please enter the family emergency conact.')

        } else {

            try {
                await AsyncStorage.setItem(STORAGE_KEY_FAMNAME, famname);
                await AsyncStorage.setItem(STORAGE_KEY_FAM, fam);
                await AsyncStorage.setItem(STORAGE_KEY_FAMADD, famAdd);
                await AsyncStorage.setItem(STORAGE_KEY_DOC, doc);
                await AsyncStorage.setItem(STORAGE_KEY_DOCNAME, docName);
                await AsyncStorage.setItem(STORAGE_KEY_DOCADD, docAdd);

                alert('Data successfully saved');
            } catch (e) {
                alert('Failed to save the data to the storage');
            }
        }
    };

    /* Read data from Async Storage */
    const readData = async () => {
        try {
            const userFamName = await AsyncStorage.getItem(STORAGE_KEY_FAMNAME);
            const userFam = await AsyncStorage.getItem(STORAGE_KEY_FAM);
            const userFamAdd = await AsyncStorage.getItem(STORAGE_KEY_FAMADD);
            const userDoc = await AsyncStorage.getItem(STORAGE_KEY_DOC);
            const userDocName = await AsyncStorage.getItem(STORAGE_KEY_DOCNAME);
            const userDocAdd = await AsyncStorage.getItem(STORAGE_KEY_DOCADD);

            if (userFamName !== null) {
                setFamName(userFamName);
            }

            if (userFam !== null) {
                setFam(userFam);
            }

            if (userFamAdd !== null) {
                setFamAdd(userFamAdd);
            }

            if (userDoc !== null) {
                setDoc(userDoc);
            }

            if (userDocName !== null) {
                setDocName(userDocName);
            }

            if (userDocAdd !== null) {
                setDocAdd(userDocAdd);
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
            await AsyncStorage.removeItem('@save_famname');
            await AsyncStorage.removeItem('@save_fam');
            await AsyncStorage.removeItem('@save_famAdd');
            await AsyncStorage.removeItem('@save_doc');
            await AsyncStorage.removeItem('@save_docName');
            await AsyncStorage.removeItem('@save_docAdd');

            setFamName('');
            setFam('');
            setFamAdd('');
            setDoc('');
            setDocName('');
            setDocAdd('');

            alert('Storage successfully cleared!');
        } catch (e) {
            alert('Failed to clear the async storage.');
        }
    };

    const onChangeTextFamName = (userFamName) => setFamName(userFamName);
    const onChangeTextFam = (userFam) => setFam(userFam);
    const onChangeTextFamAdd = (userFamAdd) => setFamAdd(userFamAdd);
    const onChangeTextDoc = (userDoc) => setDoc(userDoc);
    const onChangeTextDocName = (userDocName) => setDocName(userDocName);
    const onChangeTextDocAdd = (userDocAdd) => setDocAdd(userDocAdd);

    const onSubmitEditing = () => {
        if (!famname && !fam && !famAdd && !doc && !docName && !docAdd) return;

        saveData(famname, fam, famAdd, doc, docName, docAdd);

        setFamName('');
        setFam('');
        setFamAdd('');
        setDoc('');
        setDocName('');
        setDocAdd('');

    };

    //==========================================================================================
    // contact
    //==========================================================================================

    const args = {
        number: fam, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    const args2 = {
        number: doc, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    //==========================================================================================
    // return
    //==========================================================================================

    return (

        <ScrollView style={styles.container}>

            <Text style={styles.title}>Family emergency contact</Text>

            <Text style={styles.title3}>Family member name</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                keyboardType="default"
                value={famname}
                onChangeText={onChangeTextFamName}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title3}>Family member contact</Text>

            <View style={styles.buttonInputArea}>

                <TextInput
                    style={styles.inputAndButton}
                    placeholder="Contact"
                    keyboardType="numeric"
                    value={fam}
                    onChangeText={onChangeTextFam}
                    onSubmitEditing={onSubmitEditing}
                />

                <TouchableOpacity onPress={() => call(args).catch(console.error)} style={styles.iconButton1}>
                    <Icon name="phone" size={30} color="#1976D2" />
                </TouchableOpacity>

            </View>

            <Text style={styles.title3}>Address</Text>
            <TextInput
                multiline
                style={styles.inputII}
                placeholder="Family member's address"
                keyboardType="default"
                value={famAdd}
                onChangeText={onChangeTextFamAdd}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title}>Family doctor</Text>

            <Text style={styles.title3}>Family doctor name</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                keyboardType="default"
                value={docName}
                onChangeText={onChangeTextDocName}
                onSubmitEditing={onSubmitEditing}
            />

            <Text style={styles.title3}>Family doctor contact</Text>

            <View style={styles.buttonInputArea}>

                <TextInput
                    style={styles.inputAndButton}
                    placeholder="Contact"
                    keyboardType="numeric"
                    value={doc}
                    onChangeText={onChangeTextDoc}
                    onSubmitEditing={onSubmitEditing}
                />

                <TouchableOpacity onPress={() => call(args2).catch(console.error)} style={styles.iconButton1}>
                    <Icon name="phone" size={30} color="#1976D2" />
                </TouchableOpacity>

            </View>

            <Text style={styles.title3}>Address</Text>
            <TextInput
                multiline
                style={styles.inputII}
                placeholder="Doctor's address"
                keyboardType="default"
                value={docAdd}
                onChangeText={onChangeTextDocAdd}
                onSubmitEditing={onSubmitEditing}
            />

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

export default Contact;