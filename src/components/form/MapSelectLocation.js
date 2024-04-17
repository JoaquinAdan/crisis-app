import * as React from 'react'
import { Modal, Portal, Text, Button } from 'react-native-paper'
import MapMarker from './MapMarker'

const MapSelectLocation = () => {
  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: 'white', marginHorizontal: 20, height: 600 }

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
          <MapMarker />
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Seleccionar ubicación
      </Button>
    </>
  )
}

export default MapSelectLocation
