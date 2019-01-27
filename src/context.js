import React, { Component } from 'react';
import { ourProjects, detailProject } from '../src/data';

//Context
const ProjectContext = React.createContext();

//Provider
class ProjectProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            detailProject: detailProject,
            modalOpen: false,
            modalProject: detailProject
        };
        this.handleDetail = this.handleDetail.bind(this);
    }

    componentDidMount() {
        this.setProjects();
    }

    setProjects = () => {
        let tempProjects = [];
        ourProjects.forEach(item => {
            const singleItem = {...item};
            tempProjects = [...tempProjects, singleItem];

        });
        this.setState(() => {
            return {projects: tempProjects}
        })
    }

    getItem = (id) => {
        const project = this.state.projects.find(item => item.id === id);
        return project;
    }

    handleDetail = (id) => {
        const project = this.getItem(id);
        this.setState(() => {
            return {detailProject: project}
        });
    }


    openModal = id => {
        const project = this.getItem(id);
        this.setState( () => {
            return {modalProject: project, modalOpen: true}
        });
    }

    closeModal = () => {
        this.setState( () => {
            return {modalOpen: false}
        });
    }



    render() {
        return (
            <ProjectContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal 
               
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}

//Consumer
const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer };