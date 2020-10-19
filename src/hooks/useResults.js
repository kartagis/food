import { useState, useEffect } from 'react'
import Yelp from '../api/Yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async searchTerm => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'san jose',
                    limit: 50,
                }
            })
        setResults(response.data.businesses)
            
        } catch (error) {
            setErrorMessage('Something went wrong!')
            
        }
    }
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return [searchApi, results, errorMessage]
}