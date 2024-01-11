import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const[breed, setBreed] = useState('');
  const[size, setSize] = useState('');
  const navigate = useNavigate();

  // identificador dog_id definido na rota
  const{dog_id} = useParams();

  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {breed, size};

    if (dog_id === '0') {
      try {
        await api.post('api/v1/dogs', data, {});
        navigate('/');        
      } catch (error) {
        alert('Erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/dogs/${dog_id}`, data, {});
        navigate('/');        
      } catch (error) {
        alert('Erro ao atualizar');        
      }      
    }
  }

  // Carrega registro específico na api e seta dados para atualização
  async function loadDog(){
    try {
      const response = await api.get(`api/v1/dogs/${dog_id}`,{});
      setBreed(response.data.breed);
      setSize(response.data.size);      
    } catch (error) {
      alert("Erro ao buscar registro na api");
      navigate('/');      
    }
  }

  // Chama loadDog para preencher form
  useEffect(() => {
    if (dog_id === '0') {
      return;      
    } else {
      loadDog();      
    }
  }, [dog_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Dogs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="breed">Raça</label>
            <input data-testid="input1" id="breed" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Raça" value={breed}
            onChange={e => setBreed(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="size">Tamanho</label>
            <input data-testid="input2" id="size" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Tamanho" value={size}
            onChange={e => setSize(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}