import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

{/*this is where you left off. we have assigned an input, if u want to revert back just delete input
research needs to be done for where const=state needs to be placed. GN!*/}
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <input
                type="number"
                name="budget"
                value={budget}
                step={10}
                onChange={(e) =>
                setBudget(e.target.value)} />
        </div>
    );
};
export default Budget;
