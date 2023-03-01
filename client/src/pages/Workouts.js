import { useQuery } from "@apollo/client";
import {QUERY_CURRENT_USER} from '../utils/queries';
import {useState} from 'react';

const Workouts = () => {
    const {loading,data} = useQuery(QUERY_CURRENT_USER);
    
    const user = (data?.currentUser)
    console.log(user.workouts);

    return (
        <>
            <h1>Workouts</h1>
            {
                loading ?
                    <>
                        <h2>Loading...</h2>
                    </>
                    :
                    <>
                        
                        <h2>{user.username}</h2>
                        {user.workouts && 
                        <>
                        <h2>{user.workouts.length}</h2>
                        

                        <label htmlFor="workouts">Select a Workout: </label>
                        <select name="workouts">
                            {user.workouts && user.workouts.map(workout => (
                                <option key={workout._id} value={workout.name}>{workout.name}</option>
                            ))}
                        </select>
                        </>
                        }

                    </>
            }
        </>
    );
}

export default Workouts;