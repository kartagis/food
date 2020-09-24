import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const searchApi = async () => {
        const response = await Yelp.get('/search', {
            params: {
                term,
                location: 'san jose',
                limit: 50,
            }
        })
        setResults(response.data.businesses)
    }
    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => { setTerm(newTerm) }} 
                onTermSubmit={searchApi} />
    <Text>We have found {results.length} results.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
    }
})

export default SearchScreen