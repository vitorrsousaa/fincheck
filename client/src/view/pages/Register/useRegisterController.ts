import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/auth";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  name: z.string().nonempty("O nome é obrigatório"),
});

type FormValues = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    formState,
    handleSubmit: hookFormHandleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return await authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log(accessToken);
      signin(accessToken);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar sua conta");
    }
  });

  return {
    handleSubmit,
    errors,
    register,
    isLoading: isPending,
  };
}
