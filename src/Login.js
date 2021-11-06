import './Login.css';

function Login() {
    return (
        <div className="Login">
          <header className="Login-header">
            
            <div className="container">
              <h1>Welcome!</h1>
              <div className="form-group">
                <input placeholder="Username" type="text" className="form-control"/>
                <br/>
                <input placeholder="Password" type="password" className="form-control"/>
                <br/>
                <button className="loginbtn">Login</button>
              </div>
            </div>
            
          </header>
        </div>
      );
}

export default Login;