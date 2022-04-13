/*import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { View } from 'react-native-web';
import{useEffect , useState} from 'react'
const TableExample1 = () => {
    const [data , setData] = useState([]);
    useEffect(async() =>{
        getAvis();
    } , [])
  
    async function getAvis(){
      let result = await fetch("http://localhost:3001/comme/getcomm");
      result = await result.json();
      setData(result)
  
  }
  return (
    <View>
    {
        data.map((item , key) => (
            <Text>
            {item.avis}
            </Text>
        ))
    }
    </View>
  );
};*/
import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
export default class TableExample1 extends React.Component {
  state = {
    jsonData: '',
  };
  componentDidMount() {
    fetch('http://localhost:3001/comme/getcomm', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.body,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>{this.state.jsonData}</Text>
      </View>
    );
  }
}
  
//export default TableExample1;
  
