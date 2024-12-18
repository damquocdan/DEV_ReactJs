import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import { useState } from 'react';
import { connect } from 'react-redux';

function App() {
  const [isToggle, setToggle] = useState(false);


  let elementForm = isToggle ? (<Form />) : ("");
  return (
    <div >
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* Control */}
            <Control />
            {/* End control */}
            {/* List Student */}
            <ListStudent />
            {/* End List Student */}
          </div>
        </div>
        <div className="col-5 grid-margin">
          {/* Form */}
          {elementForm}
          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isToggle: state.addStudent,
  };
  console.log("state", state.addStudent);
};

export default connect(mapStateToProps, null) (App);
