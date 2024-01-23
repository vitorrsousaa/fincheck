import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

interface SigninParams {
  email: string;
  password: string;
}

export async function signin(params: SigninParams) {
  await sleep();
  const { data } = await httpClient.post<{ accessToken: string }>(
    "/auth/signin",
    params
  );

  return data;
}
