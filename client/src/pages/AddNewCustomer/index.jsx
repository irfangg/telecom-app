import { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";

import { AuthState } from "../../context/AuthProvider";
import { Notify } from "../../utils";
import ModalForm from "../../components/Modal";
import { fetchCustemers } from "../../utils/fetch";

const AddNewCustomer = ({ show, setShow, setTableData }) => {
  const [validated, set_Validated] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    dob: "",
    email: "",
    adharNumber: "",
    assignedMobileNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = AuthState();
  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setIsLoading(false);
      // If any field is missing
      if (
        !credentials.name ||
        !credentials.dob ||
        !credentials.email ||
        !credentials.adharNumber ||
        !credentials.assignedMobileNumber
      ) {
        return Notify("Please Fill all the Feilds", "warn");
      }
      
    } else {
      setIsLoading(true);
      
      try {
        // Register user
        const response = await fetch("/api/private/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            name: credentials.name,
            dob: credentials.dob,
            email: credentials.email,
            adharNumber: credentials.adharNumber,
            assignedMobileNumber: credentials.assignedMobileNumber,
          }),
        });
        const data = await response.json();

        if (data.success) {
          setIsLoading(false);
          setShow(false);
          await fetchCustemers(setTableData, auth);
          return Notify("Customer added", "success");
        } else {
          setIsLoading(false);
          return Notify(data.error, "error");
        }
      } catch (error) {
        setIsLoading(false);
        return Notify("Internal server error", "error");
      }
    }
    set_Validated(true);
  };

  const modalContent = () => {
    return (
      <Form
        className="auth__form"
        onSubmit={registerHandler}
        noValidate
        validated={validated}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            tabIndex="1"
            placeholder="Full name"
            value={credentials.name}
            onChange={(e) => handleCredentials(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            required
            type="date"
            name="dob"
            tabIndex="2"
            placeholder="Enter DOB"
            value={credentials.dob}
            onChange={(e) => handleCredentials(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            tabIndex="3"
            placeholder="Enter email"
            value={credentials.email}
            onChange={(e) => handleCredentials(e)}
            isInvalid={validated && !/^\S+@\S+\.\S+$/.test(credentials.email)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="adharNumber">
          <Form.Label>Adhar number</Form.Label>
          <Form.Control
            required
            type="number"
            name="adharNumber"
            tabIndex="4"
            placeholder="Enter adhar"
            value={credentials.adharNumber}
            onChange={(e) => handleCredentials(e)}
            pattern="^\d{12}$"
            isInvalid={validated && !/^\d{12}$/.test(credentials.adharNumber)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid adhar number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignedMobileNumber">
          <Form.Label>Assigned mobile number</Form.Label>
          <Form.Control
            required
            type="tel"
            pattern="^\d{10}$"
            isInvalid={
              validated && !/^\d{10}$/.test(credentials.assignedMobileNumber)
            }
            name="assignedMobileNumber"
            tabIndex="4"
            placeholder="Enter Assigned mobile number"
            value={credentials.assignedMobileNumber}
            onChange={(e) => handleCredentials(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 10-digit phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          tabIndex="6"
          variant="success"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" role="status" size="sm" />
          ) : (
            "Create Account"
          )}
        </Button>
      </Form>
    );
  };

  return (
    <ModalForm
      {...{ show, setShow }}
      title={"Register new customer"}
      bodyContent={modalContent}
      noFooter={true}
    />
  );
};

export default AddNewCustomer;
