import React from "react";
import { Table } from "react-bootstrap";

export default function ContactTable({ contactList }) {
  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((contact, index) => {
          return (
            <tr key={index}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>{contact.mail}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
