import React,{useState} from "react";
import {View ,Text, StyleSheet,FlatList,Alert} from 'react-native'
import {v4 as uuid} from 'uuid';

import  Header from "./componints/header";
import ListItem from './componints/ListItem';
 import AddItem from './componints/addItem';

const App =() =>{
  
  const[items,setItems]=useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'Eggs'},
    {id: uuid(), text:'Bread'},
    {id: uuid(), text:'Juice'},
  ]);

  const deleteItem =(id: string)=> {
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id !=id);
    });
  };
  const addItem =(text: any)=>{ 
    if(!text) {
     Alert.alert('Error', 'Please enter an item',);
    }else{
      setItems(prevItems =>{
      return[{id:uuid(),text},...prevItems];
    });
    }
    
  };
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} title={undefined}/>
      <FlatList data={items}
       renderItem={
        ({item})=> <ListItem item={item}
        deleteItem={deleteItem}
        />
      }/>
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} /> */}
    </View>
  );
};

const styles =StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    // justifyContent:'center',
    // alignItems:'center'
  },
  // text:{
  //   color:'darkslateblue',
  //   fontSize:30
  // },
  // img:{
  //   width:100,
  //   height:100,
  //   borderRadius:100/2,
  // }
});
export default App;