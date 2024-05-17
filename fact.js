import React,{useEffect,useState} from "react";
import axios from 'axios';
import {Text,View} from 'react-native'



const RandomFact = () => {
    const [fact, setFact] = useState('');
     useEffect(() => {
        const fetchData = async () => { 
           const response = await axios.get('https://api-ninjas.com/api/facts');
       setFact(response.data.fact); }; 
       fetchData();
    }, []); 
return ( <View> 
    <Text>Random Fact:</Text> 
    <Text>{fact}</Text> 
    </View> ); };
export default RandomFact;