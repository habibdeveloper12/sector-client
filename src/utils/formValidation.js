import * as yup from "yup";
import { regExpression } from "./regexForm";
import { messages } from "./message";

export const formValidation = yup.object({
  name: yup
    .string()
    .required(messages.name)
    .matches(regExpression.nameRegex, messages.fnameError),

  sectors: yup.array().min(1, messages.sectors).required(messages.fsectors),

  agreeToTerms: yup.boolean().oneOf([true], messages.agreeToTerms),
});
