import BridgeApi from '@rn-at/bridge';
import appJson from './app.json';
import App from './App';

BridgeApi.registerApp(appJson, () => App);
