
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                       
                        <h4>Les Apprenants P4
                       <Link to={'add'} className='btn btn-primary btn-sm float-end'>Ajouter Apprenant</Link> 
                            
                        </h4>
                    </div>
                </div>
                <div className='card-body'></div>
            </div>
        </div>
            
    </div >
        
    );
}

export default Home;