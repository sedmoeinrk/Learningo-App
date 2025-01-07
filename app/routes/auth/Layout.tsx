import { Outlet } from "react-router";
import Logo from "../../components/Logo";
import ThemeToggler from "~/components/ThemeToggler";
import { ThemeProvider } from "~/providers/theme";

const Layout: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="realtive flex h-screen w-full flex-row overflow-hidden">
        <div className="bg-[url('/images/mobile-bg.png')] fixed inset-0 z-0 flex h-full items-center justify-center bg-cover bg-center md:bg-[url('/images/bg.png')] md:static md:grow">
          <div className="hidden h-2/3 w-2/3 flex-col items-start justify-center gap-7 bg-white/30 md:flex lg:pl-20 pl-16">
            <div className="flex flex-col items-start gap-3 font-semibold lg:text-5xl text-4xl text-white">
              <h2>Digital</h2>
              <h2>Platform</h2>
              <h2>For Distance</h2>
              <h2 className=" text-[#3e334e]">Learning</h2>
            </div>
            <div className="flex flex-col items-start gap-0 text-[#3E334E]">
              <p>You will never know everything.</p>
              <p>But you will know more.</p>
            </div>
          </div>
          <div className="z-0 absolute inset-0 bg-gradient-to-b from-background/35 to-background/45 md:hidden"></div>
        </div>
        <div className="relative flex min-h-full w-full shrink-0 flex-col items-center md:w-[24rem] lg:w-[30rem] xl:w-[38rem]">
          <div className="flex w-full md:max-w-96 ml-10 items-start justify-between">
            <div className="flex items-start mt-10 gap-4">
              <Logo className="h-12 w-12" />
              <span className="text-3xl font-semibold">Learningo</span>
            </div>
            <ThemeToggler className="mt-10 mr-10" />
          </div>
          <div className="flex w-full flex-1 flex-col items-stretch justify-center px-6 md:max-w-96">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
