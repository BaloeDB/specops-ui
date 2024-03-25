import RegisterForm from "./SignupForm";
import { SecurityProvider } from "../../contexts/SecurityContext";
import Layout from "../common/layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Content = (props: { type: "signup" | "login" }) => {
  const { requestId } = useParams();
  const [type, setType] = useState<"signup" | "login">();

  useEffect(() => {
    console.log(props.type);
    setType(props.type);
  }, [setType, props.type]);

  return (
    <>
      <Layout
        header="LamaLab"
        content={
          <section className="flex justify-center">
            {type === "signup" ? (
              <RegisterForm type={props.type} requestId={requestId} />
            ) : (
              <RegisterForm type={props.type} />
            )}
          </section>
        }
        isLogin={true}
      />
    </>
  );
};

const SignupScreen = (props: { type: "signup" | "login" }) => {
  return (
    <SecurityProvider>
      <Content type={props.type} />
    </SecurityProvider>
  );
};

export default SignupScreen;
