
import bottomV from '../components/assets/bottom.png'
import locate from '../components/assets/location.svg'



const Body = () => {
    return ( 
        <div className="bodyy">
           
            <div className="habitat">
                
            </div>
           
 <div className="center">
     
     
     <h1 className="head"> 
         Welcome <br />
          to the {"< Creek/>"}
         </h1>
         <p className='parag'>
         TechCreek is a habitat for the teeming population of youths <br />
          making sense of their lives with their digital skills and competencies, <br />
           and actively involved in the development of the ‘new economy’ <br />
            from Rivers State.
         </p>
     </div>


     <img className='bottomV' src={bottomV} alt="v" />

     <div className="location_details">
              <p>
                  <img className='locate' src= {locate} alt="f" />
               Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                Harcourt. Rivers State, Nigeria. talk@techcreek.ng O9030003185,
                09030003180
              </p>
            </div>
    
        </div>
     );
}

 
export default Body;