import { useId, type ComponentPropsWithoutRef, type FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button, StyledFlex, StyledFormField, StyledFormLabel, StyledFormMessage, StyledFormRoot, Input, Textarea } from "./QuestionForm.css";

import type { SubmitHandler } from "react-hook-form";

// see https://github.com/casaub0n/blogr-nextjs-prisma/blob/master/src/components/simpleForm/index.tsx
// https://www.radix-ui.com/docs/primitives/components/form#message

/**
 * @see https://github.com/colinhacks/zod/issues/63#issuecomment-1429974422
 * @todo try testing
 */
export const FormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please provide a valid email" }),
  question: z.string().trim().min(1, { message: "Please enter a question" }),
});

export type IForm = z.infer<typeof FormSchema>;

type Props = ComponentPropsWithoutRef<"form">;

/**
 * @description currently, this form doesn't send any message to saver
 * @returns Question form component
 */
export const QuestionForm: FC<Props> = ({ className="question-form", ...props }) => {
  const errorMessageId = useId();

  const { control, handleSubmit } = useForm<IForm>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<IForm> = async () => {
    console.log("hello");
  };

  return (
    <Form.Root className={clsx(className, StyledFormRoot)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Controller
        name='email'
        render={({ field, fieldState: { error } }) => (
          <Form.FormField name='email' className={clsx(StyledFormField)}>
            <div className={clsx(StyledFlex)}>
              <Form.Label className={clsx(StyledFormLabel)}>Email</Form.Label>
              {error?.message && <Form.Message id={errorMessageId} className={clsx(StyledFormMessage)}>{error?.message}</Form.Message>}
            </div>
            <Form.Control asChild>
              <input
                {...field}
                aria-errormessage={errorMessageId}
                aria-invalid={!!error}
                aria-label='email'
                type='email'
                required
                className={clsx(Input)}
              />
            </Form.Control>
          </Form.FormField>
        )}
        control={control}
      />
      <Controller
        name='question'
        render={({ field, fieldState: { error } }) => (
          <Form.FormField name='question' className={clsx(StyledFormField)}>
            <div className={clsx(StyledFlex)}>
              <Form.Label className={clsx(StyledFormLabel)}>Question</Form.Label>
              {error?.message && <Form.Message name='emailerr'>{error?.message}</Form.Message>}
            </div>
            <Form.Control asChild>
              <textarea className={clsx(Textarea)} {...field} aria-invalid={!!error} aria-label='question' required />
            </Form.Control>
          </Form.FormField>
        )}
        control={control}
      />
      <Form.Submit asChild>
        <button className={clsx(Button)}>Post question</button>
      </Form.Submit>
    </Form.Root>
  );
};
