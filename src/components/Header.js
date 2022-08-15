import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.png' alt='' />
          <Button>Click Here</Button>
        </Nav>

        <Flex>
          <div>
            <h1>“One life is too short for doing everything.”</h1>

            <p>
            WE OFFER AN INTERACTIVE AND COLLABORATIVE DESIGN EXPERIENCE.
             WE ARE A CLIENT-FOCUSED COMPANY, COMMITTED TO PROVIDING CLIENTS WITH UNIQUE AND THOUGHTFUL DESIGNS USING THE LATEST TECHNOLOGY. 
             WE FOCUS ON GUIDING CLIENTS THROUGH EVERY STEP IN THE DESIGN PROCESS AND UNLOCKING SOLUTIONS THAT BEST FIT THEIR NEEDS, 
             WORKING COLLABORATIVELY WITH THEM TO CREATE A VISION AND DIRECTION FOR EACH PROJECT.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
