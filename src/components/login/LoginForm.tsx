// src/components/LoginForm.tsx
import React from "react";
import { Form, Input, Button, Row, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginRequest } from "../../utils/types/authTypes";
import { login } from "../../store/auth/authThunk";
import { useAppDispatch } from "../../store";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: LoginRequest) => {
    dispatch(login(values));
  };

  return (
    <Space direction="vertical" size={60} className="centered-container">
      <Row>
        <Typography.Title level={2}>Quản Lý Dịch Vụ</Typography.Title>
      </Row>
      <Row>
        <Form name="normal_login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng điền tên đăng nhập" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên Đăng Nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng điền mật khẩu!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật Khẩu"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
        </Form>
      </Row>
    </Space>
  );
};

export default LoginForm;
