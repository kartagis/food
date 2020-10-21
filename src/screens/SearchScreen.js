import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)} />
                <ScrollView>
                    <ResultsList 
                        results={filterByPrice('$')} 
                        title='Cost Effective' 
                    />
                    <ResultsList 
                        results={filterByPrice('$$')} 
                        title='Bit Pricier' 
                    />
                    <ResultsList 
                        results={filterByPrice('$$$')} 
                        title='Big Spender' 
                    />
                </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    text: {
        fontSize: 30,
    }
})

export default SearchScreen