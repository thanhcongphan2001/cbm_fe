import { Button, Modal } from "react-bootstrap";

export const FormModal = ({
  isVisible,
  onClose,
  onAgree,
  title,
  message = "",
  children,
}) => {
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
        {children}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onAgree}>
          agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
