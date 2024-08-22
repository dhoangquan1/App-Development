import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 7,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: "RobotoSerif-Bold",
        color: '#000',
    },
    textBox: {
        shadowColor: 'rgba(67, 206, 162, 0.25)',
        shadowOffset: {
        width: 0,
        height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        borderRadius: 15,
        borderStyle: "solid",
        borderColor: '#d9d9d9',
        borderWidth: 1,
        backgroundColor: '#fff',
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 15,
        fontFamily: "Roboto-Regular",
        color: '#000',
        flex: 1,
    },
    
  });

  export default styles