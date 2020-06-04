import React from "react";

function EmployeeCard(props) {
    return (
        <div>
            <div className="row ml-3 mt-2">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img height="100%" src={props.img} className="card-img" alt={props.name}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Occupation:{props.occupation}</p>
                            <p className="card-text">Certified {props.gamer}</p>
                        </div>
                        </div>
                    </div>
                </div>
                
        </div>
      </div>
    );
}

export default EmployeeCard;