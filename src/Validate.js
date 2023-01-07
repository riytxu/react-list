export const Validate = (title, data) => {
  let errTitle = "";
  let status = false;
  if (title === "addWorker" || title === "editWorker") {
    const { name, surname } = data;
    if (!name.replace(/ /g, "") || !surname.replace(/ /g, "")) {
      errTitle = "Имя и Фамилия должны быть заполненны!";
    } else if (
      !!name.match(/[^a-zа-яё]/gi) ||
      !!surname.match(/[^a-zа-яё]/gi)
    ) {
      errTitle =
        "Имя и Фамилия не должны содержать пробелов, цифр и спецсимволов!";
    } else {
      status = true;
    }
  } else if (title === "addTask") {
    if (!data.replace(/ /g, "")) {
      errTitle = "Задача должна быть заполнена!";
    } else {
      status = true;
    }
  }
  const result = {
    status,
    errTitle,
  };
  return result;
};
