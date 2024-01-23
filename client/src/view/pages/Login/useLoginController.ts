import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { authService } from "../../../app/services/authService";
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
});

type FormValues = z.infer<typeof schema>;

export function useLoginController() {
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
      return await authService.signin(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
      console.log(accessToken);
    } catch {
      toast.error("Credenciais inválidas");
    }
  });

  return {
    errors,
    isLoading: isPending,
    handleSubmit,
    register,
  };
}
