const Data = ({ login, password }) => {
    return (
        <div style={{ margin: '0 auto', width: '300px' }}>
            { login && <p style={{ textAlign: 'center' }}>Welcome!</p>}
            { login && <p>Login: {login}</p>}
            { password && <p>Password: {password}</p>}   
        </div>
    )
}

export default Data;