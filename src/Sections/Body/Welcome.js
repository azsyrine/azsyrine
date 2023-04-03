import './Welcome.css'
import React from 'react'

const Welcome = () => {
    
    return (

 <>
        
    <section id="hero" className="bg-dark text-light text-center text-sm-start py-5">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-center">
                <div className="py-3">
                    <h1 className="display-5">International Trending<br/>
                    <span class="text-info">Campany</span></h1>
                    <p className="py-1 lead">The ultimate Tunisian, international tranding company, where
                    you can find high quality Tunisian products</p> 
                    
                </div>

                <img className="d-none d-sm-block img-fluid w-50" src="" alt=""/>
            </div>
        </div>              
        
    </section>

 </>
    )
}


export default Welcome