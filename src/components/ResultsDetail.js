import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.info}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 10,
        marginBottom: 5,
    },
    info: {
        marginTop: 8,
        color: '#ccc',
        fontSize: 15,
    }
})

export default ResultsDetail