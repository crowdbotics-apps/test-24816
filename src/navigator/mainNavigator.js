import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile210747Navigator from '../features/UserProfile210747/navigator';
import Tutorial210746Navigator from '../features/Tutorial210746/navigator';
import NotificationList210718Navigator from '../features/NotificationList210718/navigator';
import Settings210717Navigator from '../features/Settings210717/navigator';
import Settings210709Navigator from '../features/Settings210709/navigator';
import UserProfile210707Navigator from '../features/UserProfile210707/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile210747: { screen: UserProfile210747Navigator },
Tutorial210746: { screen: Tutorial210746Navigator },
NotificationList210718: { screen: NotificationList210718Navigator },
Settings210717: { screen: Settings210717Navigator },
Settings210709: { screen: Settings210709Navigator },
UserProfile210707: { screen: UserProfile210707Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
