import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)} />
                {results.length > 0?<Text>We have found {results.length} results for {term}</Text>:<Text>Your search yielded no results.</Text>}
                <ResultsList results={filterByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterByPrice('$$$')} title='Big Spender' />
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