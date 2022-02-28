import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Add extends Component {
    state = {
      titre: '',
      niveau: '',
      description: '',
    }
    handleInput = (e) => {
      this.setState({
        [e.target.titre]: e.target.value
      });
    }
    enregister = async (e) => {
      e.preventDefault();

      const res = await axios.post('http://127.0.0.1:8000/api/ajouter', this.state);
      if(res.data.status === 200)
      {
        console.log(res.data.message);
        this.setState({
          titre: '',
          niveau: '',
          description: '',
        })
      }
    }
    render() {
      return (
        <div className='container-fluid' style={{ marginTop: "30px", textAlign: "center", background: "#ce0033" }}>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
    
                  <h4>Ajouter Un Apprenant
                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>Retour</Link>
                  </h4>
                </div>
              </div>
              <div className='card-body'>
                <form onSubmit={this.enregister}>
    
                    <div className='form-group mb-3'>
                      <label>Titre</label>
                      <input type="text" name="titre" onChange={this.handleInput} value={this.state.titre} className="form-control" />
                    </div>
    
                    <div className='form-group mb-3'>
                      <label>Niveau</label>
                      <input type="text" name="niveau" onChange={this.handleInput} value={this.state.niveau} className="form-control" />
                    </div>
    
                    <div className='form-group mb-3'>
                      <label>Description</label>
                      <input type="textarea" name="description" onChange={this.handleInput} value={this.state.description} className="form-control" />
                    </div>
    
                    <div className='form-group mb-3'>
                      <button type='submit' className='btn btn-primary'>Enregistrer</button>
                    </div>
    
                </form>
              </div>
            </div>
          </div>
        </div >
      );
    }
  
}
export default Add;
