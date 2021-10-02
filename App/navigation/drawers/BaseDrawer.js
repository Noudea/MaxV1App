import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppTabNavigator from '../tabs/AppTabNavigator';

const Drawer = createDrawerNavigator();

const BaseDrawer = () => {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerStyle={{
                backgroundColor: '#FFD9C4',
                color: '#344F5A',
            }}>
            <Drawer.Screen name="Home" component={AppTabNavigator} />
            <Drawer.Screen name="Profil" component={AppTabNavigator} />
            <Drawer.Screen name="Compte" component={AppTabNavigator} />
            <Drawer.Screen name="Notifications" component={AppTabNavigator} />
            <Drawer.Screen name="Mot de passe" component={AppTabNavigator} />
            <Drawer.Screen name="Report de bug" component={AppTabNavigator} />
            <Drawer.Screen name="Inviter des amis" component={AppTabNavigator} />
            <Drawer.Screen name="Vous appréciez Max ?" component={AppTabNavigator} />
            <Drawer.Screen name="Suivez-nous sur Instagram" component={AppTabNavigator} />
            <Drawer.Screen name="Contactez-nous" component={AppTabNavigator} />
            <Drawer.Screen name="Politique des données" component={AppTabNavigator} />
            <Drawer.Screen name="Conditions générales d'utilisation" component={AppTabNavigator} />
        </Drawer.Navigator>
    );
};

export default BaseDrawer;
