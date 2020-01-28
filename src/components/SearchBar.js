import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                style={styles.iconStyle} 
                name="search"/> 

            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                placeholder="Search"
                onEndEditing={onTermSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
    },

    inputStyle: {
        flex: 1,
        fontSize: 18
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }


})

export default SearchBar