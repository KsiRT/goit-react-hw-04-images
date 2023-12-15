import React from 'react';
import { Form, Header, Icon, Search, SearchButton } from './FilterStyled';

export const Filter = ({ onSearchSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value.trim();
    onSearchSubmit(query);
    form.elements.query.value = '';
  };
  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <Icon size={20} />
        <Search type="search" placeholder="Search" name="query" />
        <SearchButton type="submit">Find Images</SearchButton>
      </Form>
    </Header>
  );
};
