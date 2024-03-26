// src/components/LoginForm.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth/authSlice';
import { LoginRequest } from '../../utils/types/authTypes';
import AuthRequest from '../../utils/request/authRequest';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const onFinish = (values: LoginRequest) => {
        AuthRequest.login(values).then(result => result?.data && dispatch(login(result.data)))
    };

    return (
        <Form name="login" onFinish={onFinish}>
            <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[{ required: true, message: 'Xin vui lòng nhập tên đăng nhập!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tên đăng nhập"
                name="password"
                rules={[{ required: true, message: 'Xin vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Đăng Nhập
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
