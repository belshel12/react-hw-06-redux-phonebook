import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
const initialValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export const addContact = createAction("contacts/add");
export const deleteContact = createAction("contacts/delete");
export const addFilter = createAction("filter/add");

const contactsReducer = createReducer(initialValue, (builder) => {
  builder
    .addCase(addContact, (state, action) =>
      state.find((contact) => contact.name === action.payload.name)
        ? alert(`${action.payload.name} is already in contacts`)
        : [...state, action.payload]
    )
    .addCase(deleteContact, (state, action) =>
      state.filter((contact) => action.payload !== contact.id)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(addFilter, (state, action) => (state = action.payload));
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
