import { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register Page" },
    { name: "description", content: "Please Register to Continue" },
  ];
}

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>this is register page</h1>
    </div>
  );
};

export default RegisterPage;
