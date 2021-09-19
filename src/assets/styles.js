import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    sectionContainer: {
        backgroundColor: '#E8EAED',
        paddingTop: 60,
        paddingHorizontal: 5,
        paddingBottom: 30
    },
    input: {
        height: 34,
        margin: 12,
        width: '70%',
        borderWidth: 1,
        padding: 5,
        borderColor: '#0d0d0c',
        borderRadius: 5
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10
    },
    searchBtn: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        borderRadius:5,
        width: '90%',
        borderWidth: 1,
        width: '20%',
        marginTop: 12,
        padding: 6,
        height: 34,
    },
    horizontalLine: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 12
    },
    errorMessage: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        color: '#d10816'
    },
    repoList: {
        margin: 12
    },
    repoLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#399fe6',
        marginBottom: 5
    },
    repoDesc: {
        fontSize: 12,
        color: '#5d5d5d'
    },
    flexDirectionRow: {
        flexDirection:'row'
    }
});