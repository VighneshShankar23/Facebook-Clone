import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />

      <h1
        className="p-5 text-white bg-blue-500 rounded-full text-center cursor-pointer shadow-md"
        onClick={signIn}
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;