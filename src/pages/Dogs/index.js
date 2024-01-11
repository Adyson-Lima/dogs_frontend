import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Dogs(){

  const[my_dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  // Read, lê dados da api
  useEffect(() => {
    api.get('api/v1/dogs',{})
    .then(response => {setDogs(response.data)})
  }, []);

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Dogs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Raça</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_dogs.map(dog => (
              <tr key={dog.id}>
                <th scope="row">{dog.id}</th>
                  <td>{dog.breed}</td>
                  <td>{dog.size}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info">Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger">Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>
  );

}