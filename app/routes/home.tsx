import ThemeToggler from "~/components/ThemeToggler";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ThemeProvider } from "~/providers/theme";
import Logo from "~/components/Logo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Learningo App" },
    { name: "description", content: "Welcome to Learningo App" },
  ];
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className=" bg-[url('/images/mobile-bg.png')] bg-cover bg-center flex h-screen items-center justify-center md:bg-[url('/images/bg.png')]">
        <div className="relative flex w-3/4 h-3/4 flex-col items-center justify-center gap-4 rounded-lg p-6 shadow-2xl bg-secondary/70">
          <div className="flex text-3xl font-semibold">
            <Logo className="w-12 h-12" />
            <span>Learningo App</span>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/auth" className="text-xl w-24">
              <Button className="w-full">Login</Button>
            </Link>
            <Link to="/auth/register" className="text-xl w-24">
              <Button className="w-full">Register</Button>
            </Link>
            <ThemeToggler className="" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
