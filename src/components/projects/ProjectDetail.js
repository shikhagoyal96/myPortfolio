import React, { Component } from 'react';

export default class ProjectDetail extends Component {
  render() {
    return (
      <div>
         <ul className="projects">
                    {this.props.projects.map((project) => (
                        <li key={project._id}>
                            <div>
                              <p>{project.text1}</p>
                              <p>{project.text}</p> 
                              <button 
                              onClick={()=>this.props.cart(project)}>
                                cart</button>                               
                            </div>
                        </li>
                    ))}
                </ul>
      </div>
    )
  }
}
