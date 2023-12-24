const colorVarient = {
    primary: {
        backgroundColor: '#2196f3',
        color: '#fff'
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#000'
    },
    error: {
        backgroundColor:'#ef5350',
        color: '#fff'
    }, 
    warning: {
        backgroundColor: '#ff9800',
        color: '#000'
    },
    info: {
        backgroundColor: '#80d8ff',
        color: '#000'
    },
}

const sizeVarient = {
    small: {
        padding: '0.5rem 1rem',
    },
    medium: {
        padding: '1rem 2rem',
    },
    large: {
        padding: '1.5rem 3rem'
    }
}

const ButtonGroup = (props) => {
    const type = props.type;
    const name = props.name;
    const userVerient = colorVarient[props.background];
    return (
        <button type={type}
            style={{
                padding: '.5rem 1rem',
                margin: '0.5rem 1rem',
                fontFamily: 'Arial',
                fontsize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                ...userVerient,
                ...sizeVarient[props.size],

        }}
        >
            {name}
        </button>
    )
}
export default ButtonGroup;