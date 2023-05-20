import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';



export default function App() {
  

  return (
    <View style={styled.container}>
      <View style={styled.header}>
        
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 18, alignSelf:'baseline' }}>
            <View style={{
              height: 31.21,
              width: 31.21,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 999,
              backgroundColor: '#33CC95',
              left: 8,             
              }}>
              <Text style={styled.labelButton}>
                $
              </Text>
            </View>            
            <Text style={styled.labelButton}>
              dt Money
            </Text>
          </View>
          
        </TouchableOpacity>
        
                
        <TouchableOpacity style={styled.buttonatransaction}>
          <Text key={1} style={styled.labelButton}>
            Nova transação
          </Text>
        </TouchableOpacity>
    </View>

      <View style={styled.content}>
        
        <View style={{ flexDirection: 'row', height: 71 }}>
          <View style={{ flex: 1, flexDirection: 'row', top: 32, height: 19 }}>
            
          </View>          
        </View>
        
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 2,
  },
  header: {
    
    height: 234,
    alignItems: 'center',
    backgroundColor: '#5429CC',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,   
    
  },
  
    
  content: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingHorizontal: 24,
  },
    
          
  buttonatransaction: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#6933ff',
    
  },
  buttonMoney: {
    width: 31.21,
    height: 31.21,
    top: 66,
    left: 24,
    backgroundColor: '#33CC95 ',
  },

  
  labelButton: {
    flexDirection: 'row',
    color: '#fff',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    TextAlign: 'right',
    alignItems: 'center',
    
  },
});