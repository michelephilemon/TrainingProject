import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

const Loader = ({ text }) => (
  <Container>
    <Message icon size="big">
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Aguarde um segundo</Message.Header>
        {text || 'Estamos carregando o conteudo para você.'}
      </Message.Content>
    </Message>
  </Container>
);

export default Loader;
