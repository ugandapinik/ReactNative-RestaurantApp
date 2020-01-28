import React, {useState, useEffect} from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler'

const ResultsShowScreen = ({navigation}) => { 

    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null;
    }
    
    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo }
                renderItem={ ({item}) => {
                    return <Image style={styles.image} source={{ uri: item }}/>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
    }
})

export default ResultsShowScreen

