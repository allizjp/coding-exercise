import LanguageDropdownMenu from "@/components/LanguageDropdownMenu";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router";
import { Fragment } from "react/jsx-runtime";

const DefaultLayout = () => {
  return (
    <Fragment>
      <header className={headerCn}>
        <h1 className={title}>My Events</h1>
        <div className={languageDropdownMenuContainerCn}>
          <LanguageDropdownMenu />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

const title = cn("text-xl");
const headerCn = cn("flex border-b-2 items-center px-2 py-2");
const languageDropdownMenuContainerCn = cn("ml-auto");

export default DefaultLayout;
