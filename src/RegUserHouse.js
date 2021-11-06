import './RegUserHouse.css'

function RegUserHouse() {
    return (
        <div className="Register">
          <header className="Register-header">
            <div className="containerMain">
              <div className="user-form">
                <h1>Add New User</h1>
                <input placeholder="Full Name" type="text" className="form-control"/>
                <br/>
                <input placeholder="Password" type="password" className="form-control"/>
                <br/>
                <input placeholder="Confirm Password" type="password" className="form-control"/>
                <br/>
                <input placeholder="Phone" type="text" className="form-control"/>
                <br/>
                <input placeholder="Mail" type="text" className="form-control"/>
                <br/>
                <button className="Submitbtn">Submit User</button>
              </div>
              <div className="house-form">
                <br/>
                <h1>Add New House</h1>
                <input placeholder="Exterior Number" type="text" className="form-control"/>
                <br/>
                <input placeholder="Street" type="text" className="form-control"/>
                <br/>
                <input placeholder="Monthly Amount" type="text" className="form-control"/>
                <br/>
                <button className="Submitbtn">Submit House</button>
              </div>
            </div>
          </header>
        </div>
      );
}

export default RegUserHouse;