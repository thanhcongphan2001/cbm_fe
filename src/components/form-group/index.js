import { Form } from "react-bootstrap";

export const FormGroup = ({ controlId = "", title, children }) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{title}</Form.Label>
      <Form.Control />
      {children}
    </Form.Group>
  );
};
