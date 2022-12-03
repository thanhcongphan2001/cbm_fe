import {
  Container,
  Button,
  Row,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Col,
  Table,
} from "react-bootstrap";
import { FetchAllUser } from "../../services";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FormModal } from "./../form-modal";
import { FormGroup } from "./../form-group";

export const FormTable = () => {
  const [listUsers, getListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setshowEdit] = useState(false);
  const [showAdd, setshowAdd] = useState(false);
  useEffect(() => {
    getUser(1);
  }, []);

  const handleClose = () => {
    setShowDelete(false);
    setshowEdit(false);
    setshowAdd(false);
  };
  const handleDelete = () => {
    setShowDelete(false);
  };
  const handleAdd = () => {
    setshowAdd(false);
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
              <Form.Label column sm="3">
                <b>Tên namespace</b>
              </Form.Label>
              <Col sm="9">
                <Form.Control />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                <b> Tên bảng dữ liệu</b>
              </Form.Label>
              <Col sm="9">
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
            <Button variant="primary" style={{ padding: "5px 50px" }}>
              Lưu
            </Button>
          </div>
        </Col>
      </Row>

      <Table striped hover>
        <thead>
          <tr>
            <th>Tên trường</th>
            <th>Tên kiểu dữ liệu</th>
            <th>Khóa ngoại</th>
            <th>Quan hệ dữ liệu</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 ? (
            listUsers.map((item) => {
              return (
                <tr key={`user-${item.id}`}>
                  <td>Name {item.id}</td>
                  <td>String</td>
                  <td>Id</td>
                  <td>một một</td>
                  <td>
                    <Button variant="warning" onClick={() => setshowEdit(true)}>
                      Sửa
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => setShowDelete(true)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <tr className="">
                <td colspan={5}>loading......................</td>
              </tr>
            </>
          )}
        </tbody>
      </Table>

      
      <div className="add_value">
        <Button variant="primary border" onClick={() => setshowAdd(true)}>
          Thêm trường dữ liệu
        </Button>
      </div>

      <ReactPaginate
        // ref={pagination}

        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        onPageChange={setPage}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        previousLabel={<>&laquo;</>}
        nextLabel={<>&raquo;</>}
      />
      <FormModal
        isVisible={showDelete}
        onClose={handleClose}
        onAgree={handleDelete}
        title="Delete"
        message="Are you sure delete"
      />

      <FormModal
        isVisible={showEdit}
        onClose={handleClose}
        onAgree={handleAdd}
        title="Edit"
      >
        <Form>
          <FormGroup title="Tên Trường" controlId="formBasicEmail" />
          <FormGroup title="Tên kiểu dữ liệ" controlId="formBasicPassword" />
          <FormGroup title="Khóa ngoại" controlId="formBasicEmail" />
          <FormGroup title="Quan hệ dữ liệu" controlId="formBasicEmail">
            <Form.Select disabled>
              <option>Một Một</option>
            </Form.Select>
          </FormGroup>
        </Form>
      </FormModal>

      <FormModal
        isVisible={showAdd}
        onClose={handleClose}
        onAgree={handleAdd}
        title="Add field"
      >
        <Form>
          <FormGroup title="Tên Trường" controlId="formBasicEmail" />
          <FormGroup title="Tên kiểu dữ liệ" controlId="formBasicPassword" />
          <FormGroup title="Khóa ngoại" controlId="formBasicEmail" />
          <FormGroup title="Quan hệ dữ liệu" controlId="formBasicEmail">
            <Form.Select disabled>
              <option>Một Một</option>
            </Form.Select>
          </FormGroup>
        </Form>
      </FormModal>
    </Container>
  );
};
