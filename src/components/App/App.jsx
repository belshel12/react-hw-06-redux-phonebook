import { Layout } from "../Layout";
import { Title } from "./App.styled";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Layout>
  );
};
