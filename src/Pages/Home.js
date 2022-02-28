
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axios } from 'react-router-dom';


function Home() {
    return (
        <div className='container-fluid' style={{marginTop: "30px", textAlign: "center" , background: "#ce0033"}}>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                       
                        <h4>Les Apprenants P4
                       <Link to={'add'} className='btn btn-primary btn-sm float-end'>Ajouter Apprenant</Link> 
                            
                        </h4>
                    </div>
                </div>
                <div className='card-body'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom Prenom</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </div>
            </div>
        </div>
            
    </div > );
}
export default Home;