import { Map } from "immutable";

export class Language {
  private _short: string;
  private _long: string;
  private _code: string;

  constructor(params: { short: string; long: string; code: string }) {
    const { code, long, short } = params;
    this._short = short;
    this._long = long;
    this._code = code;
  }

  get short(): string {
    return this._short;
  }

  set short(value: string) {
    this._short = value;
  }

  get long(): string {
    return this._long;
  }

  set long(value: string) {
    this._long = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}

type SupportedLanguage = "pt" | "en";

export const supportedLanguages = Map<SupportedLanguage, Language>([
  ["pt", new Language({ short: "pt", long: "portugues", code: "pt" })],
  ["en", new Language({ short: "en", long: "english", code: "en" })],
]);
