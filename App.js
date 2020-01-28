import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

// 4HwS2oCVQ1-f_kzHCv5X3A
// API Key
// rZAGbu5wAGH6TjHbMQ7Sn_u3Nb9VQcSg14tRsbKXHhQtUMzKtbt_xc008X4iuscT0Wvw0x-aXLVEqASQl2l7VJQHG7O4Pn7cEqb0cMNDODfqn0zHQoqsC2eyaBIqXnYx

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen
  },

  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
      headerTitleStyle: { alignSelf: 'center', flex:1  },
    }
  }
);

export default createAppContainer(navigator);
