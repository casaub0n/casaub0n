import { useId, type ComponentPropsWithoutRef, type FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { blackA, violet, mauve } from "@radix-ui/colors";
import * as Form from "@radix-ui/react-form";
import { styled } from "@stitches/react";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import type { SubmitHandler } from "react-hook-form";

// see https://github.com/casaub0n/blogr-nextjs-prisma/blob/master/src/components/simpleForm/index.tsx
// https://www.radix-ui.com/docs/primitives/components/form#message

/**
 * @see https://github.com/colinhacks/zod/issues/63#issuecomment-1429974422
 * @todo use pandacss
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
export const PandaForm: FC<Props> = ({ className, ...props }) => {
  const errorMessageId = useId();

  const { control, handleSubmit } = useForm<IForm>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<IForm> = async () => {
    console.log("hello");
  };

  return (
    <FormRoot className={clsx(className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Controller
        name='email'
        render={({ field, fieldState: { error } }) => (
          <FormField name='email'>
            <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <FormLabel>Email</FormLabel>
              {error?.message && <FormMessage id={errorMessageId}>{error?.message}</FormMessage>}
            </Flex>
            <Form.Control asChild>
              <Input
                {...field}
                aria-errormessage={errorMessageId}
                aria-invalid={!!error}
                aria-label='email'
                type='email'
                required
              />
            </Form.Control>
          </FormField>
        )}
        control={control}
      />
      <Controller
        name='question'
        render={({ field, fieldState: { error } }) => (
          <FormField name='question'>
            <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <FormLabel>Question</FormLabel>
              {error?.message && <FormMessage name='emailerr'>{error?.message}</FormMessage>}
            </Flex>
            <Form.Control asChild>
              <Textarea {...field} aria-invalid={!!error} aria-label='question' required />
            </Form.Control>
          </FormField>
        )}
        control={control}
      />
      <Form.Submit asChild>
        <Button css={{ marginTop: 10 }}>Post question</Button>
      </Form.Submit>
    </FormRoot>
  );
};

const FormRoot = styled(Form.Root, {
  width: 260,
});

const FormField = styled(Form.Field, {
  display: "grid",
  marginBottom: 10,
});

const FormLabel = styled(Form.Label, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "35px",
  color: "black",
});

const FormMessage = styled(Form.Message, {
  fontSize: 13,
  color: "red",
  opacity: 0.8,
});

const Flex = styled("div", { display: "flex" });

const inputStyles = {
  all: "unset",
  boxSizing: "border-box",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,

  fontSize: 15,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:hover": { boxShadow: `0 0 0 1px black` },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&::selection": { backgroundColor: blackA.blackA9, color: "white" },
};

const Input = styled("input", {
  ...inputStyles,
  height: 35,
  lineHeight: 1,
  padding: "0 10px",
});

const Textarea = styled("textarea", {
  ...inputStyles,
  resize: "none",
  padding: 10,
});

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: "100%",

  backgroundColor: "white",
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});
