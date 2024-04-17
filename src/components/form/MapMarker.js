import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function MapMarker() {
  const [draggableMarkerCoord, setDragableMarkerCoord] = React.useState({
    latitude: -34.162833,
    longitude: -58.959025,
  })
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{ latitude: -34.162833, longitude: -58.959025, latitudeDelta: 0.025, longitudeDelta: 0.0121 }}
      >
        <Marker
          draggable
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => {
            setDragableMarkerCoord(e.nativeEvent.coordinate)
          }}
        />
      </MapView>
      <Text>Latitud: {draggableMarkerCoord.latitude}</Text>
      <Text>Longitud: {draggableMarkerCoord.longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
  },
})
