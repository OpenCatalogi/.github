import dateFormat from "dateformat";

export const translateDate = (language: string, date: Date): string => {
  switch (language) {
    case "nl":
      return dateFormat(date, "dd-mm-yyyy");
    case "en":
      return dateFormat(date, "mm-dd-yyyy");
  }

  return dateFormat(date, "dd-mm-yyyy"); // required default return due to i18n.language being basic typed
};
