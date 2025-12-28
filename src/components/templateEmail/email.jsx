// components/email-template.jsx
import { Html, Button, Container, Heading, Text } from '@react-email/components';

export const EmailTemplate = ({ firstName, message, email }) => (
  <Html>
    <Container style={{ padding: '20px' }}>
      <Heading>Olá, {firstName}!</Heading>
      <Text>Oficina Bará:</Text>
      <Text style={{ 
        backgroundColor: '#f4f4f4', 
        padding: '15px', 
        borderRadius: '5px' 
      }}>
        {message}
      </Text>
      <Button 
        href="https://seusite.com"
        style={{
          backgroundColor: '#1b8742',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '5px'
        }}
      >
        Visitar Site
      </Button>
    </Container>
  </Html>
);