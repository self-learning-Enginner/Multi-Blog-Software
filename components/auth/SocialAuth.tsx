import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";
import { signIn } from "next-auth/react";
import { LOGIN_REDIRECT } from "@/routes";
import toast from "react-hot-toast";

const SocialAuth = () => {
  const handleOnClick = (provider: "google" | "github") => {
    signIn(provider, {
      redirectTo: LOGIN_REDIRECT,
    });
  };

  const toastNotification = () => {
    toast.error("Gogole Auth Error Fixing");
  };

  return (
    <div className="flex justify-center w-full gap-8">
      <Button
        type="button"
        label="Continue With Github"
        outlined
        icon={FaGithub}
        onClick={() => handleOnClick("github")}
      />
      <Button
        type="button"
        label="Continue With Google"
        outlined
        icon={FaGoogle}
        onClick={toastNotification}
      />
    </div>
  );
};

export default SocialAuth;
