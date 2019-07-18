import { StyleSheet } from "react-native";
import Colors from './colors';

export default StyleSheet.create({
    container_full: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        ...StyleSheet.absoluteFillObject,
        paddingVertical: 35,
        paddingHorizontal: 75
    },
    container_center: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 35,
        paddingHorizontal: 50
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#ccc',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon_light: {
        width: 25,
        height: 25,
        tintColor: Colors.primary.light,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon_primary:{
        width: 25,
        height: 25,
        tintColor: Colors.primary.default,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon_dark: {
        width: 25,
        height: 25,
        tintColor: Colors.primary.dark,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btn:{
        //flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary.default,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 5
    },
    txt: {
        fontSize: 15,
        fontFamily: 'open sans',
        textAlign: "left",
    },
    txt_sub: {
        fontSize: 12,
        fontFamily: 'open sans',
        fontStyle: 'italic'
    },
    txt_white:{
        color: '#fff'
    },
    txt_dark: {
        color: '#000'
    },
    txt_primary: {
        color: Colors.primary.default
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10
    },
    bg_primary: {
        backgroundColor: Colors.primary.default
    },
    bg_white: {
        backgroundColor: '#fff'
    },
    image_big: {
        margin: 10,
        width: 250,
        height: 250
    },
    icon_fileds: {
        flex: 0,
        flexDirection: "row",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 5,
        marginVertical: 5,
        borderBottomColor: Colors.primary.light,
        borderBottomWidth: 2
    },
    icon_input: {
        flex: 2,
        alignSelf: 'flex-start'
    },
    list_item: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    list_icon: {
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    list_text: {
        flex: 4
    }
});