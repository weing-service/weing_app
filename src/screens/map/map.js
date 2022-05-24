import React, { useEffect, useState} from "react";
import { StyleSheet, View, Dimensions, Text, TextInput, Image} from "react-native";
import BottomNavigator from '../../components/common/bottomNavigator';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';

const SearchBar = () => {
    return (
        <View style={styles.top}>
            <Text style={{color: "#89B6C2", fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>
                팀플에 딱 맞는 장소를
            </Text>
            <Text style={{color: "black", opacity: 0.7, fontWeight: 'bold', fontSize: 20}}>
                쉽고 빠르게 찾아 보세요!
            </Text>
            <View style={{flexDirection: 'row',}}>
                <TextInput
                    style={styles.input}
                    placeholder="키워드, 장소, 지역으로 다양하게 검색해보세요."
                    placeholderTextColor="#999999"
                />
                <Image 
                    source={require('../../assets/vote/search.png')}
                    style={{width: 25, height: 25, position: 'absolute', right: 20, top: 18}}
                />
            </View>
        </View>
    );
}

const Map = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          console.log(location);
        })();
      }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return(
        <View>
            <View style={{flex: 1}}>
                <SearchBar />
                <View style={styles.mapConainter}>
                    <MapView 
                        region={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        userLocationCalloutEnabled={true}
                        customMapStyle={customStyle}
                    />
                </View>
            </View>
            <View style = {styles.fixed2}>
                <BottomNavigator type = {2}/>
            </View>
        </View>
    );
};

const customStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffb606',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffb606',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#00ff00',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        zIndex: 2,
        backgroundColor: "#E5E5E5",
        paddingTop: 60,
        paddingLeft: 20,
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: 45,
        width: 375,
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 20,
    },
    mapConainter: {
        top: 150
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fixed2: {
        position: 'absolute',
        top : Dimensions.get('window').height - 100,
        width : '100%'
    },
});

export default Map;