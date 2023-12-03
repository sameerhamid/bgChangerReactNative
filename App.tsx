import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#fffff');
  const generateBgColor = () => {
    const hexCodeColor = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexCodeColor[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={generateBgColor}>
          <View style={styles.actionBtn}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                textTransform: 'uppercase',
              }}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: 'teal',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});

export default App;
