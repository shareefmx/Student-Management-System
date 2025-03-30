import React from "react";
import { Modal, Input, Button, Select, Form } from "antd";
import { useStudentContext } from "../context/StudentContext";

interface StudentFormProps {
  visible: boolean;
  onClose: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ visible, onClose }) => {
  const { addStudent } = useStudentContext();
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    addStudent({ ...values, id: Date.now() });
    form.resetFields();
    onClose();
  };

  return (
    <Modal title="Add Student" open={visible} onCancel={onClose} footer={null}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="year" label="Year of Admission" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="course" label="Course" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="contact" label="Contact" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Add Student</Button>
      </Form>
    </Modal>
  );
};

export default StudentForm;
