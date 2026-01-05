// components/email-template.jsx
import { Html, Button, Container, Heading, Text } from '@react-email/components';

export const EmailTemplate = ({ firstName, message, email }) => (
  <Html>
    <Container style={{ padding: '20px' }}>
      <Heading>Mensagem de {firstName}!</Heading>
      <Text>Oficina Bará:</Text>
      <Text style={{ 
        backgroundColor: '#f4f4f4', 
        padding: '15px', 
        borderRadius: '5px' 
      }}>
        {message}
      </Text>
    </Container>
  </Html>
);