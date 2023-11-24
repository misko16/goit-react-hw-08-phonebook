import { ContactList } from 'ContactList';
import { ContactForm } from 'components/Forms/ContactForm';
const Contacts = () => {
  return (
    <div className="app-container">
    <ContactForm />
    <ContactList />
  </div>
  );
};

export default Contacts;
