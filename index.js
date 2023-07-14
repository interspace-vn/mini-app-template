import MiniApi from '@rn-at/bridge';
import appJson from './app.json';
import App from './App';

MiniApi.registerApp(appJson, () => App);
