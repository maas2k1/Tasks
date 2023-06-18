import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const HistoryScreen = () => {
  const history = useSelector((state) => state.history);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.number} is {item.result}</Text>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
