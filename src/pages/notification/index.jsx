import React from 'react';
import { Container, ContainerButton } from './style';
import { Button } from 'react-native'
import { Texto } from '../home/style';

export default function Notification({ navigation }) {
  return (
    <Container>
      <Texto>TELA NOTIFICATION!!!</Texto>
      <ContainerButton>
        <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
      </ContainerButton>
      <ContainerButton>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      </ContainerButton>
    </Container>
  );
}