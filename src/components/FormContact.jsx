import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormContact({ addContact, dispatch, state }) {
  const submitForm = (e) => {
    e.preventDefault();

    if (!state.firstName || !state.lastName || !state.phone || !state.mail) {
      dispatch({
        type: "setErrorMessage",
        value: "Vous devez remplir tout les champs.",
      });
    } else {
      const newContact = {
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        mail: state.mail,
      };
      addContact(newContact);
      dispatch({ type: "setFirstName", value: "" });
      dispatch({ type: "setLastName", value: "" });
      dispatch({ type: "setPhone", value: "" });
      dispatch({ type: "setMail", value: "" });
    }
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <Form.Label htmlFor="firstName" className="text-white fs-3">
          Prénom
        </Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          id="firstName"
          value={state.firstName}
          onChange={(e) =>
            dispatch({ type: "setFirstName", value: e.target.value })
          }
        />

        <Form.Label htmlFor="lastName" className="text-white fs-3">
          Nom
        </Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          id="lastName"
          value={state.lastName}
          onChange={(e) =>
            dispatch({ type: "setLastName", value: e.target.value })
          }
        />

        <Form.Label htmlFor="phone" className="text-white fs-3">
          Téléphone
        </Form.Label>
        <Form.Control
          className="mb-3"
          type="number"
          id="phone"
          value={state.phone}
          onChange={(e) =>
            dispatch({ type: "setPhone", value: e.target.value })
          }
        />

        <Form.Label htmlFor="mail" className="text-white fs-3">
          Adresse e-mail
        </Form.Label>
        <Form.Control
          className="mb-3"
          type="email"
          id="mail"
          value={state.mail}
          onChange={(e) => dispatch({ type: "setMail", value: e.target.value })}
        />
        <div className="text-center ">
          <Button className="w-50 fs-3 fw-bold" variant="success" type="submit">
            Ajouter
          </Button>
        </div>
        {state.errorMessage && (
          <p className="text-center text-orange fs-3">{state.errorMessage}</p>
        )}
      </Form>
    </>
  );
}
