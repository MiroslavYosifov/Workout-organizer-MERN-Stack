import React, { Component } from 'react';
import  classes from './WorkoutBuilder.module.css';

import { services } from '../../services/index';

import Workout from '../../components/Workout/Workout';


class WorkoutBuilder extends Component {
    constructor (props) {
        super(props)
    }

    state = {
        exercises: [],
        workout: ['pyrva', 'vtora']
    }

    componentDidMount () {
        console.log(localStorage);
        services.workoutService.getWorkouts().then(data => {
            this.setState({
                exercises: data
            });
        });
    }

    
    render() {

        return (
            <div className={classes.WorkoutBuilder}>
                <h1>THESE ARE THE EXERCISES</h1>
                <Workout/>
                <div>
                    {this.state.exercises.map((ex, index) => {
                        return <Workout key={index} exercise={ex.name}/>
                    })}
                </div>
                
            </div>
            
        );
    }
}

export default WorkoutBuilder;