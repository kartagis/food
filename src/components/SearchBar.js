import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.icon} name='search' size={30}/>
            <TextInput 
                style={styles.input}
                placeholder= 'Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#f0eeee',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar
