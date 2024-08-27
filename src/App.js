// import './App.css';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import Card from './components/Card'
import contents from './contents'


const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* First of All !!! */}
            <GlobalStyles />

            <Header />

            {/* 
            <div className="container">
                <h1>Hello World</h1>
            </div> 
            */}
            
            <Container>
                {/* <h1>Hello World</h1> */}

                {
                    contents.map((item, index) => <Card key={index} item={item}/>)
                }
            </Container>

            <Footer />

        </ThemeProvider>
    );
}

export default App;
