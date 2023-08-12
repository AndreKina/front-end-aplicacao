import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Container, FormSide, Return } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ImageBackground } from "../../components/ImageBackground"
import { LoginHeader } from "../../components/LoginHeader"

export const SignIn = () => {
  return (
    <Container>
      <FormSide>
        <LoginHeader text="Crie sua conta" />

        <form>
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="email" placeholder="E-Mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />

          <Button type="submit" text="Cadastrar" />
        </form>

        <Return>
          <FiArrowLeft size={18} />
          <span>Voltar para o login</span>
        </Return>
      </FormSide>

      <ImageBackground />
    </Container>
  )
}
