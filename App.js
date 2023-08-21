import React from 'react';
import { View, StyleSheet } from 'react-native';
import MiniApi from '@rn-at/bridge';
import { Header, Text, scaleSize } from '@rn-at/ui-kits';
const app = require('app.json');

let App = props => {
  return (
    <View>
      <Header
        onGoBack={() => {
          MiniApi.goBack();
        }}
        iconCloseName="close-o"
        title="Mini App"
      />
      <View style={styles.body}>
        <Text>{`App Id: ${app?.appId}`}</Text>
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
