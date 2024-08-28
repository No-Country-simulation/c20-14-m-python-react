import Btn from "./Btn/Btn.jsx";
import css from "./css.module.css";
import InputText from "./InputText/InputText.jsx";
import LinkTo from "./LinkTo/LinkTo.jsx";

export default function SignUp() {
  return (
    <form className={css.form}>
      <InputText title="Email" placeholder="Value" />
      <InputText title="Password" placeholder="Value" />
      <LinkTo to="/">Forgot password?</LinkTo>
      <Btn>Sign up</Btn>
      <LinkTo to="/">Sign in</LinkTo>
    </form>
  );
}