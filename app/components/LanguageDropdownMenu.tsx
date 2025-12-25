import { Language, supportedLanguages } from "@/lib/i18next/shared";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LanguageDropdownMenu = () => {
  const { i18n, t } = useTranslation();

  const renderLanguages = () => {
    return supportedLanguages.entrySeq().map(([key, value]) => {
      const onClick = () => {
        i18n.changeLanguage(value.code);
      };

      return (
        <DropdownMenuItem
          key={key}
          onClick={onClick}
          className={dropdownMenuItemCn}
        >
          <span className={shortCn}>{value.short}</span>
          <span className={longCn}>{value.long}</span>
        </DropdownMenuItem>
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {t("components.language-dropdown-menu.languages")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {t("components.language-dropdown-menu.change-language")}
        </DropdownMenuLabel>
        {renderLanguages()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const dropdownMenuItemCn = cn("flex");
const shortCn = cn("text-xs w-4");
const longCn = cn("text-sm capitalize");

export default LanguageDropdownMenu;
