import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function Button(props) {

    const { text } = props

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> { text } </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: 'white',
        width: '60%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    text: {
        color: '#d2691e',
        fontWeight: 'bold',
        fontSize: 15,
        textShadowColor:'#585858',
        textShadowOffset:{width: 2, height: 3},
    },
})