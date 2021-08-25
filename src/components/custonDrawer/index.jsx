import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'

import { Avatar, Caption, ContainerBottonItem, ContentImage, CustonDrawerContent, Title } from './style'
import Home from '../../pages/home'
import Notification from '../../pages/notification'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CustonDrawer({ navigation }, props) {
  return (
    <View style={{ flex: 1 }} >
      <ContentImage>
        <Avatar
          source={require('../../assets/avatar.jpg')}
        />
        <View>
          <Title>Isaque Lourenço</Title>
          <Caption>@isaque.lourenco.1804</Caption>
        </View>
      </ContentImage>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name='home'
              color={color}
              size={size}
            />
          )}
          label='Home'
          onPress={() => { navigation.navigate('Home') }}

        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name='bell'
              color={color}
              size={size}
            />
          )}
          label='Notification'
          onPress={() => { navigation.navigate('Notification') }}

        />
      </DrawerContentScrollView>
      <ContainerBottonItem  >
        <DrawerItem
          icon={({ size }) => (
            <Icon
              style={{ marginRight: -30, }}
              name='exit-to-app'
              color='#f30909ba'
              size={size}
            />
          )}
          label='Sair'
          labelStyle={{ color: '#f30909ba', marginRight: -40 }}
          style={{ width: 70, }}
          onPress={() => { navigation.closeDrawer() }}

        />
      </ContainerBottonItem>
    </View >

  )
}