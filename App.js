import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bridge from '@rn-at/bridge';
import { Header, Text, scaleSize } from '@rn-at/ui-kits';

let App = props => {
  return (
    <View>
      <Header
        onGoBack={() => {
          Bridge.goBack();
        }}
        iconCloseName="close-o"
        title="Mini App"
      />
      <View style={styles.body}>
        <Text>{`SessionId: ${props.sessionId}`}</Text>
        <Text>{`Signature: ${props.signature}`}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    margin: scaleSize(16),
  },
});
