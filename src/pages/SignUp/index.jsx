import { FiMail, FiLock } from "react-icons/fi"

import { Container, FormSide } from "./styles"

import { ImageBackground } from "../../components/ImageBackground"
import { LoginHeader } from "../../components/LoginHeader"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export const SignUp = () => {
  return (
    <Container>
      <FormSide>
        <LoginHeader text="Faça seu login" />

        <form>
          <Input type="email" placeholder="E-Mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />

          <Button type="submit" text="Entrar" />
        </form>

        <span>Criar Conta</span>
      </FormSide>
      <ImageBackground />
    </Container>
  )
}
