import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {RootStackParamsList} from '../navigation/Natigation';
import {DATA} from '../data/data';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
          numColumns={2}
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.card, {width: width / 2 - 25, marginRight: 10}]}
              onPress={() => navigation.navigate('DetailScreen', item)}
              activeOpacity={1}>
              <Animated.Image
                sharedTransitionTag={item.id}
                source={{uri: item.image}}
                style={styles.card}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-between',
  },
  card: {
    marginVertical: 10,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
