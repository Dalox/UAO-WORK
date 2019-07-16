import { StyleSheet } from "react-native";
import Colors from './colors';

export default StyleSheet.create({
    container_full: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        ...StyleSheet.absoluteFillObject
    },
    container_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    icon_light: {
        width: 25,
        height: 25,
        tintColor: Colors.primary.light
    },
    icon_dark: {
        width: 25,
        height: 25,
        tintColor: Colors.primary.dark
    },
    btn:{
        //flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary.default,
        paddingVertical: 15,
        //paddingHorizontal: 30
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
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center"
    },
    bg_white: {
        backgroundColor: '#fff'
    },
    image_big: {
        margin: 10,
        width: 250,
        height: 250
    }
});