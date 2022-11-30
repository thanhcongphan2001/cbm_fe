import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FetchAllUser } from "../services/UserServices";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Toast } from "react-bootstrap";
function DataEntryForm() {
  const [listUsers, getListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setshowEdit] = useState(false);
  useEffect(() => {
    getUser(1);
  }, []);

  const handleClose = () => {
    setShowDelete(false);
    setshowEdit(false);
  };
  const handleDelete = () => {
    setShowDelete(false);
  };
  const handleAdd = () => {
    setshowEdit(false);
  };
  const getUser = async (num) => {
    let res = await FetchAllUser(num);

    if (res && res.data) {
      getListUsers(res.data);

      setTotalPages(res.total_pages);
    }
  };

  const setPage = (event) => {
    getUser(+event.selected + 1);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                <b>Tên form nhập liệu</b>
              </Form.Label>
              <Col sm="8">
                <Form.Control />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="d-flex justify-content-Start mt-4">
          <span className="mr">Name:</span>
          <input style={{ display: "inline" }}></input>
        </Col>
       
        <Col lg="6" className="d-flex justify-content-Start mt-4">
     <span className="mr">Name:</span>
          <input style={{ display: "inline" }}></input>
        </Col>
        <Col lg="6" className="d-flex justify-content-Start mt-4">
           <span className="mr">Name:</span>
           <select className="form-select w-28" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </Col>
        <Col lg="6" className="d-flex justify-content-Start mt-4">
           <span className="mr">Name:</span>
           <select className="form-select w-28" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </Col>
        <Col lg="6" className="d-flex justify-content-Start mt-4">
     <span className="mr">Name:</span>
          <input style={{ display: "inline" }}></input>
        </Col>
     
        <Col lg="6" className="d-flex justify-content-Start mt-4">
     <span className="mr">Name:</span>
          <input style={{ display: "inline" }}></input>
        </Col>
      </Row>
  <div className="d-flex justify-content-around mt-4">
  <Button variant="primary">Lưu</Button>{' '}
      <Button variant="secondary">Load</Button>{' '}
      <Button variant="success">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
  </div>

  
    
    </Container>
  );
}

export default DataEntryForm;
