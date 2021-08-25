import React from 'react';
import { Button } from 'react-native';
import { Container, ContainerButton, Texto } from './style';

export default function Home({ navigation }) {
  return (
    <Container >
      <Texto>TELA HOME!!!</Texto>
      <ContainerButton>
        <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
      </ContainerButton>
      <ContainerButton>
        <Button
          onPress={() => navigation.navigate('Notification')}
          title="Go to notifications"
        />
      </ContainerButton>
    </Container>
  );
}