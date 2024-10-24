import { ListItem } from "./ListItem";
import { List, Item, DeleteBtn } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/store";

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector((state) => state);
  return (
    <List>
      {contacts
        .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => (
          <Item key={contact.id}>
            <ListItem name={contact.name} number={contact.number} />
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </DeleteBtn>
          </Item>
        ))}
    </List>
  );
};

export default ContactList;
