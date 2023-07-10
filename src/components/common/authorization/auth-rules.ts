export const authRules = {
  userName: [{ required: true, message: "Please input login" }],

  password: [{ required: true, message: "Please input password" }],
};

export const loginValidator = (value: string): string => {
  value = value.replace(/ \s+/g, " ");
  return value.replace(/[а-яА-Я^%@!?&+*=.,'"$(){}\][\-<>~`;:|\/№#]/g, "");
};
