import React from "react";
import  ReactDOM  from "react-dom";
import { registerLicense } from '@syncfusion/ej2-base';
import "./assets/styles/index.css"
import { store,  persistor} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import App  from "./App";

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35Ud0BiXnpdd3NTRA==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVkWHpfd3FWQWlfUw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXn5bcXNQRWhcWEY=;MTA4MjkxMkAzMjMwMmUzNDJlMzBoSkVKWmpxRGMxNEM3MjlmajIrNThYeDFLUzRrSXFXRVdQSCsxS1djVUdJPQ==;MTA4MjkxM0AzMjMwMmUzNDJlMzBIWWxzd1hTSFFldEVmczJoaVNkMU1WTCtESFhUMGNGbGZmREJBdFZBSDhjPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXhfdXVSQ2NUWUx1;MTA4MjkxNUAzMjMwMmUzNDJlMzBNRkZhOGdkaGxaRnVFbTN4V0UvSXdmbXlPSDdoWGtqVlBOVzl4NUdMZXBFPQ==;MTA4MjkxNkAzMjMwMmUzNDJlMzBJaDI5QnozYklzY0xLWmhQQ2VHc090aHA5UUlQd25FdWRwTDYxWjhQYW5BPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjXn5bcXNQRWlaV0c=;MTA4MjkxOEAzMjMwMmUzNDJlMzBqWGZUSGUwcGxad093eTUzWEFYVEtHeksxMlUwWCtHWDk3ejZyM0t3SEN3PQ==;MTA4MjkxOUAzMjMwMmUzNDJlMzBjaHZrUy9vMlM1cEJ1MlR1dmlyRFZzeTVHdkQ4Ri9SYUErVksxVER1alpBPQ==;MTA4MjkyMEAzMjMwMmUzNDJlMzBNRkZhOGdkaGxaRnVFbTN4V0UvSXdmbXlPSDdoWGtqVlBOVzl4NUdMZXBFPQ==');

ReactDOM.render(
<Provider store={store}>
{/* <PersistGate loading={null} persistor={persistor}>  */}
<App/> 
{/* </PersistGate> */}
</Provider>,
document.getElementById("root"))