import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductButtonLeftView,
  ProductButtonText,
  ProductButtonAddText,
} from './styles';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((cartAmount, product) => {
      cartAmount[product.id] = product.amount;
      return cartAmount;
    }, {})
  );

  const dispatch = useDispatch();
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <ProductButton onPress={() => handleAddProduct(item.id)}>
              <ProductButtonLeftView>
                <Icon name="add-shopping-cart" size={24} color="#FFF" />
                <ProductButtonText>{amount[item.id] || 0}</ProductButtonText>
              </ProductButtonLeftView>
              <ProductButtonAddText>
                {'Adicionar'.toUpperCase()}
              </ProductButtonAddText>
            </ProductButton>
          </Product>
        )}
        horizontal
      />
    </Container>
  );
}
