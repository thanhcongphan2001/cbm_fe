import { Table } from "react-bootstrap";

export const FormTable = ({ children }) => {
  return (
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
        {children}
      </tbody>
    </Table>
  );
};
