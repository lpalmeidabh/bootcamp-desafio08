import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SafeAreaContainer,
  Container,
  Logo,
  CartContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cart = useSelector(state => state.cart.length);

  return (
    <SafeAreaContainer>
      <Container>
        <Logo />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ItemCount>{cart || 0}</ItemCount>
        </CartContainer>
      </Container>
    </SafeAreaContainer>
  );
}
