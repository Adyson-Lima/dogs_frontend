import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
// import api from '../../services/api';

export default function Dogs(){

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Dogs Crud
      </div>
      <div className="card-body">

      </div>
    </div>
  );

}