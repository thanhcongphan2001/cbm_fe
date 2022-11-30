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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4">
                <b>Tên namespace</b>
              </Form.Label>
              <Col sm="8">
                <Form.Control />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4">
                <b> Tên bảng dữ liệu</b>
              </Form.Label>
              <Col sm="8">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="9">
                <b> Bảng tham chiếu </b>
              </Form.Label>
              <Col sm="3">
                <InputGroup className="mb-12">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>

          <hr></hr>
          <div className="list_reference">
            <div className="reference">tham chiếu 1 &#10007;</div>
            <div className="reference">tham chiếu 2 &#10007;</div>
            <div className="reference">tham chiếu 3 &#10007;</div>
            <div className="reference">tham chiếu 4 &#10007;</div>
          </div>
        </Col>
        <Col>
          <div className="add_value">
            <Button variant="primary" style={{ padding: "5px 75px" }}>
              Lưu
            </Button>
          </div>
          <div className="add_value my-3">
            <Button variant="secondary">tạo from nhập dữ liệu</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">Required</Col>
        <Col className="d-flex justify-content-end">Required</Col>
      </Row>
      <Row>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
        </Col>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check />
        </Col>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check />
        </Col>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check />
        </Col>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check />
        </Col>
        <Col lg="6" className="d-flex justify-content-between mt-4">
          <span>Name:</span>
          <input style={{ display: "inline" }}></input>
          <Form.Check />
        </Col>
      </Row>
    </Container>
  );
}

export default DataEntryForm;
