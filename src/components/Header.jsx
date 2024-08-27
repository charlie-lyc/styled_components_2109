import { Container } from './styles/Container.styled'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'


export default function Header() {

    return (
        <>
            {/*
            <header>
                <h1>Huddle</h1>
            </header> 
            */}

            {/* /////////////// */}
            
            <StyledHeader 
                // bg='#ebfbff'
            >
                {/* <h1>Huddle</h1> */}

                <Container>
                    <Nav>
                        <Logo src='./images/logo.svg' alt='huddle logo' />
                        <Button>Try It Free</Button>
                    </Nav>

                    <Flex>
                        <div>
                            <h1>Build The Community Your Fans Will Love</h1>

                            <p>
                                Huddle re-imagines the way we build communities. You have a voice,
                                but so does your audience. Create connections with your users as
                                you engage in genuine discussion.
                            </p>

                            {/* <Button> */}
                            <Button bg='#ff0099' color='#fff'>
                                Get Started For Free
                            </Button>
                        </div>

                        <Image src='./images/illustration-mockups.svg' alt='app page mockup' />
                    </Flex>
                </Container>


            </StyledHeader>
        </>
    )
}