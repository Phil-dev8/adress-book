import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import Trash from "../assets/trash.svg";
import Settings from "../assets/settings.svg";
import Validate from "../assets/validate.svg";

export default function ContactTable({ contactList, setContactList }) {
  const [modifiedIndex, setModifiedIndex] = useState(null);

  const updateContact = (index) => {
    setModifiedIndex(index);
  };

  const validate = () => {
    setModifiedIndex(null);
  };

  const handleChange = (e, index, field) => {
    const updatedContacts = [...contactList];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: e.target.value,
    };
    setContactList(updatedContacts);
  };

  const trash = (index) => {
    const updatedList = contactList.filter((contact, i) => i !== index);
    setContactList(updatedList);
  };

  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Supprimer / Modifier</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((contact, index) => {
          return (
            <tr key={index}>
              <td>
                {modifiedIndex === index ? (
                  <Form.Control
                    className="mb-3"
                    type="text"
                    value={contact.firstName}
                    onChange={(e) => handleChange(e, index, "firstName")}
                  />
                ) : (
                  <>{contact.firstName}</>
                )}
              </td>
              <td>
                {modifiedIndex === index ? (
                  <Form.Control
                    className="mb-3"
                    type="text"
                    value={contact.lastName}
                    onChange={(e) => handleChange(e, index, "lastName")}
                  />
                ) : (
                  <>{contact.lastName}</>
                )}
              </td>
              <td>
                {modifiedIndex === index ? (
                  <Form.Control
                    className="mb-3"
                    type="text"
                    value={contact.phone}
                    onChange={(e) => handleChange(e, index, "phone")}
                  />
                ) : (
                  <>{contact.phone}</>
                )}
              </td>
              <td>
                {modifiedIndex === index ? (
                  <Form.Control
                    className="mb-3"
                    type="email"
                    value={contact.mail}
                    onChange={(e) => handleChange(e, index, "mail")}
                  />
                ) : (
                  <>{contact.mail}</>
                )}
              </td>
              <td
                style={{
                  display: "flex",
                  gap: "25px",
                  justifyContent: "center",
                }}
              >
                {modifiedIndex === index ? (
                  <img
                    src={Validate}
                    style={{
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    onClick={validate}
                  />
                ) : (
                  <>
                    <img
                      src={Trash}
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => trash(index)}
                    />
                    <img
                      src={Settings}
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => updateContact(index)}
                    />
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
