import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import axios from 'axios';

const TheWeather = () => {
  const [data, setData] = useState([]);
  const [dataInterface, setDataInterface] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const imgInterface = {
    cloud: 'https://i.ibb.co/Q6FdPwt/cloud.png',
    rain: 'https://i.ibb.co/rQntvVv/rain.png',
    clear_day: 'https://i.ibb.co/xYC6Mt6/sunny.png',
    cloudly_day: 'https://i.ibb.co/fS5jsTM/cloudday.png',
    cloudly_night: 'https://i.ibb.co/NLRr140/cloudly-night.png',
  };

  const getData = () => {
    axios
      .get('https://api.hgbrasil.com/weather')
      .then(function (response) {
        // handle success
        setData(response.data.results.forecast);
        setDataInterface(response.data.results);
        console.log(data, dataInterface);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{color: '#4195C0'}}>{item.weekday}</Text>

        <View
          style={{
            backgroundColor: '#88D9FB',
            width: 100,
            height: 175,
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 15,
            flexGrow: 1,
            margin: 10,
            flexBasis: 0,
          }}>
          <View>
            <Text style={{color: '#5D8DB2'}}>{item.date}</Text>
          </View>
          <View>
            <Image
              resizeMode="contain"
              style={{width: 50, height: 50, alignSelf: 'center'}}
              source={{
                uri: 'https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-21.jpg',
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#46517C'}}>
              Min {item.min}º
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#46517C'}}>
              Max {item.max}º
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#5BD4FD',
        flex: 1,
        padding: 18,
      }}>
      <Image
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          margin: 20,
        }}
        source={{
          uri: 'https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-10.jpg',
          // https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-10.jpg
          // https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541__340.png
        }}
      />
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          color: '#363568',
          fontWeight: 'bold',
          margin: 10,
        }}>
        {dataInterface.city}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 70,
          alignSelf: 'center',
          color: '#2F2F61',
        }}>
        {dataInterface.temp}º
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20, margin: 5}}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/91/91977.png',
            }}
          />
          <Text style={{color: '#357190'}}>{dataInterface.wind_speedy}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20, margin: 10}}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/31/31823.png',
            }}
          />
          <Text style={{color: '#357190'}}>{dataInterface.humidity}%</Text>
        </View>
      </View>

      <FlatList
        keyExtractor={item => item._id}
        data={data}
        renderItem={renderItem}
        horizontal
        style={{margin: 10, flex: 1}}
      />
    </View>
  );
};

export default TheWeather;
