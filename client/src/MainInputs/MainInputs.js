import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAssignments } from "../redux/choresRedux";
import { resetAssigned } from "../redux/peopleRedux";

function MainInputs(props) {
    const handleClick = () => {
        props.clearAssignments();
        props.resetAssigned();
    }
    return (
        <div className="homeWrapper">
            <header>Turn Taker</header>
            <div className="linkWrapper">
                <Link className="homeLink people" to="/peopleInputs"><div className="directions">Enter People</div></Link>
                <p className="sideArrow">&#x279c;</p>
                <Link className="homeLink chores" to="/choresInputs"><div className="directions">Enter Chores</div></Link>
                <p className="sideArrow">&#x279c;</p>
                <Link className="homeLink assign" to="/assignedChores" onClick={handleClick}><div className="directions">Assign Chores</div></Link>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return state.chores
}
export default connect(mapStateToProps, { clearAssignments, resetAssigned })(MainInputs);