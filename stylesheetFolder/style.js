import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F7FAFC',
        padding: 10,
    },
    imageStyle: {
        height: 120,
        width: 120,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // ==========================================================================================
    // Alignment and arrangement style
    // ==========================================================================================

    buttonAlignment: { flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 10, marginRight: 10 },

    cardStyle: { shadowColor: 'transparent', borderRadius: 0, },

    buttonInputArea: { flex: 1, flexDirection: 'row', },

    contentStyle: { flex: 1, flexDirection: 'row', margin: 10 },

    // ==========================================================================================
    // Button
    // ==========================================================================================

    startButton: {
        height: 40,
        width: '50%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton2: {
        height: 40,
        margin: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton3: {
        height: 120,
        width: '50%',
        margin: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton1: {
        height: 40,
        margin: 5,
        marginTop: 12,
        marginBottom: 12,
        paddingLeft: 10,
        //borderRadius: 100,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconButton2: {
        height: 40,
        width: 40,
        margin: 5,
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    clearButton: {
        height: 40,
        width: '50%',
        marginRight: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#1976D2',
        fontSize: 16,
    },
    buttonText2: {
        fontSize: 16,
        color:'black'
    },

    buttonArea: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 12, marginTop: 30
    },

    // ==========================================================================================
    // Input and picker
    // ==========================================================================================

    input: {
        height: 40,
        margin: 5,
        marginTop: 12,
        marginBottom: 12,
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        fontSize: 16,
    },
    inputII: {
        height: 120,
        margin: 5,
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        fontSize: 16,
    },
    pickerStyle: {
        height: 40,
        margin: 5,
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    // ==========================================================================================
    // Text
    // ==========================================================================================
    titleHome: {
        fontSize: 22,
        margin: 5,
        color:'black',
    },
    title: {
        fontSize: 22,
        marginLeft: 5,
        color:'black',
    },
    title2: {
        fontSize: 18,
        color:'black',
    },
    title3: {
        //fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 5,
        fontSize: 16,
        textTransform: 'uppercase',
        color:'black',
    },
    description: {
        flex: 1,
        //flexWrap: 'wrap',
        textAlign: 'justify',
        fontSize: 16,
        color:'black',
    },

    // ==========================================================================================
    // Table
    // ==========================================================================================

    head: { height: 40, backgroundColor: '#1976D2', },
    headText: { margin: 6, color: 'white' },
    text: { margin: 6, color:'black' },
    dataStyle: { backgroundColor: 'lavenderblush' },

});

export { styles }