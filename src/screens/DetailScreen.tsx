import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {RootStackParamsList} from '../navigation/Natigation';

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, 'DetailScreen'> {}

export default function DetailScreen({route}: Prop) {
  const {id, image} = route.params;

  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.card}
        source={{uri: image}}
        sharedTransitionTag={id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  card: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
