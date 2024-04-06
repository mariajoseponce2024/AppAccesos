import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

import CustomCheckBox from './CustomCheckBox';

class AccesoriosCheckScreen extends React.Component {
  static contextType = GlobalStateContext;

  render() {
    const { neumaticos, matafuego, toggleNeumaticos, toggleMatafuego } = this.context;

    return (
      <View style={styles.container}>
        <CustomCheckBox
          icon={require('../assets/neumaticos.png')}
          title=""
          checked={neumaticos}
          onChecked={toggleNeumaticos}
        />
        <CustomCheckBox
          icon={require('../assets/matafuego.png')} // Asegúrate de tener este asset.
          title=""
          checked={matafuego}
          onChecked={toggleMatafuego}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginLeft: 0,
    padding: 0,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default AccesoriosCheckScreen;
