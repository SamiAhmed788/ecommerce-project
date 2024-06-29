import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import Categoriesitems from './categoriesitems';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <Categoriesitems key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Categories;
