import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import Yelp from '../api/Yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState();
    const id = navigation.getParam('id')
    console.log(result)
    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    image: {
        height: 125,
        width: 250,
        borderRadius: 10,
        marginBottom: 10,
    }
})

export default ResultsShowScreen