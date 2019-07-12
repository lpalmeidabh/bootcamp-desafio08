import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;

  background: #191920;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.View`
  margin: 10px;
  padding: 10px;
  height: 350px;
  width: 220px;
  background: #fff;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 14px 0;
  margin-bottom: 14px;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductButtonLeftView = styled.View`
  background: ${darken(0.03, '#7159c1')};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductButtonAddText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
