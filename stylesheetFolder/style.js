import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 8,
    },
    imageStyle: {
        height: 120,
        width: 120,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton: {
        height: 40,
        width: 170,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton2: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        alignItems: 'center',
      },
    iconButton: {
        height: 40,
        width: 170,
        margin: 12,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    clearButton: {
        height: 40,
        width: 170,
        padding: 10,
        margin: 'auto',
        marginRight: 12,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },
    inputII: {
        height: 120,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },
    pickerStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#344953',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
    },
    title2: {
        fontSize: 18,
    },
    title3: {
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 16,
      },
    description: {
        flex: 1,
        //flexWrap: 'wrap',
        textAlign: 'justify',
        fontSize: 16,
    },

    head: { height: 40, backgroundColor: '#1976D2', },
    headText: { margin: 6, color: 'white' },
    text: { margin: 6 },
    dataStyle: { backgroundColor: 'white' },

});

export { styles }