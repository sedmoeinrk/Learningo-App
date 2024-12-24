import { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "signup Page" },
    { name: "description", content: "Please Signup to Continue" },
  ];
}

const SignupPage: React.FC = () => {
  return (
    <div>
      <h1>this is signup page</h1>
    </div>
  );
};

export default SignupPage;
