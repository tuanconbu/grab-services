import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import CheckBox from '../../../components/CheckBox';

export default function VendorsDetailScreen({route, navigation}) {
  const [selectedServices, setSelectedServices] = useState([]);
  console.log('Selected Services:', selectedServices);

  const data = [
    {
      id: 1,
      serviceImage:
        'https://media.allure.com/photos/5ee11520a9ba330008e32528/16:9/w_2992,h_1683,c_limit/massage.jpg',
      serviceName: 'Làm đẹp',
      prices: '200.000 VND',
    },
    {
      id: 2,
      serviceImage:
        'https://media.allure.com/photos/5ee11520a9ba330008e32528/16:9/w_2992,h_1683,c_limit/massage.jpg',
      serviceName: 'Làm đẹp',
      prices: '200.000 VND',
    },
    {
      id: 3,
      serviceImage:
        'https://media.allure.com/photos/5ee11520a9ba330008e32528/16:9/w_2992,h_1683,c_limit/massage.jpg',
      serviceName: 'Làm đẹp',
      prices: '200.000 VND',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            borderBottomWidth: 0.5,
            marginVertical: 5,
            borderColor: 'grey',
            backgroundColor: 'white',
          }}>
          <List.Item
            title={item.serviceName}
            description={item.prices}
            left={() => (
              <Avatar.Image
                style={{marginHorizontal: 10}}
                size={50}
                source={{uri: item.serviceImage}}
              />
            )}
            right={() => (
              <CheckBox
                item={item}
                onSelected={({item, checked}) => {
                  if (checked) {
                    const newItems = [...selectedServices];
                    newItems.push(item);
                    setSelectedServices(newItems);
                  } else if (!checked) {
                    const unCheckedItems = [...selectedServices];
                    var newUncheckedItems = unCheckedItems.filter(
                      (e) => e.id !== item.id,
                    );
                    setSelectedServices(newUncheckedItems);
                  }
                }}
              />
            )}
          />
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#eaeaea'}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `item + ${index}`}
        renderItem={renderItem}
      />
    </View>
  );
}
