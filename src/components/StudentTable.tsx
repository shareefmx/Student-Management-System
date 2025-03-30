import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { useStudentContext } from "../context/StudentContext";

const StudentTable: React.FC = () => {
  const { students, deleteStudent, updateStudent } = useStudentContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (values: any) => {
    updateStudent(editingStudent.id, { ...editingStudent, ...values });
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Table dataSource={students} rowKey="id">
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Course" dataIndex="course" key="course" />
        <Table.Column title="Year" dataIndex="year" key="year" />
        <Table.Column title="Contact" dataIndex="contact" key="contact" />
        <Table.Column
          title="Actions"
          key="actions"
          render={(_, record) => (
            <>
              <Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>Edit</Button>
              <Button onClick={() => deleteStudent(record.id)} danger>Delete</Button>
            </>
          )}
        />
      </Table>

      <Modal title="Edit Student" open={isEditModalOpen} onCancel={() => setIsEditModalOpen(false)} footer={null}>
        <Form onFinish={handleUpdate} initialValues={editingStudent}>
          <Form.Item name="name" label="Name"><Input /></Form.Item>
          <Form.Item name="course" label="Course"><Input /></Form.Item>
          <Form.Item name="year" label="Year"><Input /></Form.Item>
          <Form.Item name="contact" label="Contact"><Input /></Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form>
      </Modal>
    </>
  );
};

export default StudentTable;