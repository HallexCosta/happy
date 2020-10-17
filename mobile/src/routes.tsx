import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OrphanagesMap } from './pages/OrphanagesMap'
import { OrphanageDetails } from './pages/OrphanageDetails'

import { SelectMapPosition } from './pages/CreateOrphanage/SelectMapPosition'
import { OrphanageData } from './pages/CreateOrphanage/OrphanageData'
import { Header } from "./components/Header"

const Stack = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
        <Stack.Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Stack.Screen
          name="OrphanageDetail"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Stack.Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        />

        <Stack.Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}