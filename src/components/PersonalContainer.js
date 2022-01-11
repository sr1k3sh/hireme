import React, { useEffect, useRef } from 'react';
import { iteraction } from '../utils';
import Button from './Button';
import Header from './Header';
function PersonalContainer(){
    const pRef = useRef();

    useEffect(()=>{
        iteraction(pRef.current);
    },[])

    return(
        <React.Fragment>
            <section className='personal-container container-xl'>
                <div className='rikesh__column'>
                    <Header title="I get you results"></Header>
                    <p ref={pRef} className='personal-container__p'>I build sites with amazing looks and fast load-times that do one thing: <strong>Get You Results.</strong>
                        <br></br>
                        Whatever you have in mind, you should know - I build with a goal-oriented eye for precision.
                        <br></br>
                        When we're done, you will have a site that gets the job done in <i>style</i>.
                    </p>
                    <Button outline={true} btnText="SEE MY PAST WORK"></Button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default PersonalContainer;