import React from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  Text,
  Stack,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const theme = useMantineTheme();

  const { login, loading, error } = useAuthContext();

  // Simple inline SVG icons as React components
  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const LockIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (!value ? "Username is required" : null),
      password: (value) => (!value ? "Password is required" : null),
    },
  });

  const handleSubmit = (values) => {
    login(values);
  };

  return (
    <div className="loginMainContainer">
      <div className="loginContainerDiv">
        <Paper radius="md" p="xl" withBorder shadow="md">
          <Title
            order={1}
            ta="center"
            mb={10}
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color:
                theme.colors[theme.primaryColor][
                  theme.colorScheme === "dark" ? 4 : 7
                ],
            }}
          >
            Welcome Back
          </Title>
          <Text size="lg" weight={500} ta="center" mb="xl">
            Sign in to your account
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                required
                label="Username"
                placeholder="username"
                icon={<EmailIcon />}
                radius="md"
                size="md"
                {...form.getInputProps("username")}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                icon={<LockIcon />}
                radius="md"
                size="md"
                {...form.getInputProps("password")}
              />
              {error?.loginerror && (
                <p style={{ color: "red", marginBottom: "0px" }}>
                  {error?.loginerror}
                </p>
              )}

              <Button
                fullWidth
                mt="sm"
                size="md"
                type="submit"
                loading={loading}
                color={theme.primaryColor}
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default React.memo(Login);
