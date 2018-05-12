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
                <Link className="homeLink people" to="/peopleInputs"><span className="directions">Enter People</span></Link>
                <p className="sideArrow">&#x279c;</p>
                <Link className="homeLink chores" to="/choresInputs"><span className="directions">Enter Chores</span></Link>
                <p className="sideArrow">&#x279c;</p>
                <Link className="homeLink assign" to="/assignedChores" onClick={handleClick}><span className="directions">Assign Chores</span></Link>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return state.chores
}
export default connect(mapStateToProps, { clearAssignments, resetAssigned })(MainInputs);