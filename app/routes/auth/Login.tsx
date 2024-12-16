import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Link } from "react-router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
// InputPasswordWithEye
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Route } from "./+types/login";

////////////////////////////

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login Page" },
    { name: "description", content: "Please Login to Continue" },
  ];
}

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <h2 className="text-3xl font-semibold">Hey, Hello 👋</h2>
        <p className="mb-20">Enter your email and password to login.</p>
        <h2 className="py-5 text-2xl font-semibold text-secondary-foreground md:hidden">
          Login
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="w-full h-12 bg-transparent border-2 border-primary/65 focus-visible:outline-none placeholder:text-primary/75 focus:placeholder-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full h-12 bg-transparent border-2 border-primary/65 focus:outline-none placeholder:text-primary/75 focus:placeholder-transparent"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <Checkbox
                    id="rememberMe"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />

                  <FormLabel htmlFor="rememberMe" className="p-0 text-sm ">
                    Remember me
                  </FormLabel>
                  <span className="ml-auto text-sm">
                    <Link to="/sign-up" className="underline">
                      Forget password?{" "}
                    </Link>
                  </span>
                </FormItem>
              )}
            />
            <div className="flex flex-row-reverse gap-4">
              <Button variant="link" type="submit" className="w-full">
                Sign up
              </Button>
              <Button
                variant="ig"
                type="submit"
                className="w-full hover:opacity-95"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Login;
