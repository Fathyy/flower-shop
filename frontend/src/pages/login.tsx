import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGlobalContext } from "@/context/GlobalContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface InputStateProps {
  email: string;
  password: string;
}

interface GlobalContextProps {
  login: (inputState: InputStateProps) => void;
}

function Login() {
  const { login } = useGlobalContext() as GlobalContextProps;
  const [inputState, setinputState] = useState<InputStateProps>({
    email: "",
    password: "",
  });

  const { email, password } = inputState;

  const handleInput = (name: keyof typeof inputState) => (e: ChangeEvent<HTMLInputElement>) => {
    setinputState({ ...inputState, [name]: e.target.value });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(inputState);
    setinputState({
      email: "",
      password: "",
    });
  }
  return (
    <div className="flex justify-center flex-col min-h-screen gap-4 items-center">
      <h3 className="font-medium text-3xl">Login Form</h3>
      <Card className="w-[350px]">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your Email" value={email} onChange={handleInput("email")} name={email} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Your Password" value={password} onChange={handleInput("password")} name={password}/>
              </div>
            </div>
            <CardFooter className="flex justify-between">
          <Button>Login</Button>
        </CardFooter>
          </form>
        </CardContent>
        <div className="flex gap-2 text-sm mt-5">
          <span>Dont Have an account?</span>
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Login;
