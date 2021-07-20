import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import axios from 'axios';

const TheWeather = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://api.hgbrasil.com/weather')
      .then(function (response) {
        // handle success
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  // const data = [
  //   {
  //     hour: '9:00 AM',
  //     image:
  //       'https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-21.jpg',
  //     temp: '23º',
  //   },
  //   {
  //     hour: '10:00 AM',
  //     image:
  //       'https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-21.jpg',
  //     temp: '23º',
  //   },
  //   {
  //     hour: '11:00 AM',
  //     image:
  //       'https://icon-library.com/images/thunderstorm-icon/thunderstorm-icon-21.jpg',
  //     temp: '24º',
  //   },
  // ];

  const renderItem = ({item}) => {
    return (
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
          <Text style={{color: '#5D8DB2'}}>{item.time}</Text>
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
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#46517C'}}>
            {item.temp}
          </Text>
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
        {data.city}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 70,
          alignSelf: 'center',
          color: '#2F2F61',
        }}>
        {data.temp}º
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
          <Text style={{color: '#357190'}}>{data.wind_speedy}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20, margin: 10}}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/31/31823.png',
            }}
          />
          <Text style={{color: '#357190'}}>{data.humidity}%</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View>
          <Text style={{color: '#4195C0'}}>Today, 18 Sep</Text>
        </View>
        <View>
          <Text style={{color: '#4195C0'}}>Mon, 19 Sep</Text>
        </View>
        <View>
          <Text style={{color: '#4195C0'}}>Tue, 20 Sep</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={3}
        style={{margin: 10}}
      />
    </View>
  );
};

export default TheWeather;
