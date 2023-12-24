import InputGroup from "./Components/input-group/InputGroup";
import ButtonGroup from "./Components/button-group/ButtonGroup";

function App() {
    return (
        <div style={{
            width: '30%',
            backgroundColor: '#646cff',
            padding: '2rem',
            color: '#000',
            margin: '2rem auto'
        }}>
            <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: "column",
                gap: '0.5rem',
            }}>
                <h3 style={{
                    fontSize: '2rem',
                    color: '#fefefe',
                    textDecoration: 'underline',
                }}>Sign up</h3>
            </div>
            <form action="">
                <InputGroup label="Enter Name: " type="text" id="name"/>
                <InputGroup label="Enter Email: " type="email" id="email"/>
                <InputGroup label="Enter Password: " type="password" id="password"/>
                <div>
                    <ButtonGroup type="reset" name="Reset" background="error" size="small"/>
                    <ButtonGroup type="Submit" name="Submit" background="success" size="small"/>
                </div>
            </form>
        </div>
    )
}

export default App;