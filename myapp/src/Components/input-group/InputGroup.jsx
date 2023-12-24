const InputGroup = (props) => {
    const label = props.label;
    const type = props.type;
    const id = props.id;

    return (
        
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "rem",
        }}>
            <label style={{
                fontFamily: 'Arial',
                fontSize: '1rem',
                color: '#f3f3f3',
                fontWeight: 'bold',
                marginBottom: '0px',
            }} htmlFor="name">
                {label}
            </label>
            <input type={type} id={id} style={{
                padding: '.5rem 1rem',
                fontFamily: 'Arial',
                fontSize: '16px',
                outline: 'none',
                border: '1px solid #f4f4f4',
                borderRadius: '5px',
                backgroundColor: 'inherit',
                marginTop: '0px',

            }} />
        </div>
    );
}

export default InputGroup;