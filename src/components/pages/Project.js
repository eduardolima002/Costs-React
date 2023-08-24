import style from './Project.module.css';

import Loading from '../layout/Loading';

import {parse, v4 as uuidv4} from 'uuid'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../services/ServiceForm';
import ServiceCard from '../services/ServiceCard';

function Project() {
    const { id } = useParams();


    const [project, setProject] = useState([]);
    const [service, setService] = useState({});
    
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProject(data);
                setService(data.services);
            })
            .catch(err => console.log(err))
    }, [id])

    function editPost(project) {
        setMessage('');

        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!');
            setType('Error');
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then(data => {
                setProject(data);
                setShowProjectForm(false);
                setMessage('Projeto Atualizado!');
                setType('success');

            }).catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    function removeService(){

    }

    function createService(project){

        const lastService = project.services[project.services.length - 1];

        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço');
            setType('error');
            project.services.pop();
            return false;
        }

        project.cost = newCost;

        fetch(`http:localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project)
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err))
    }


    return (
        <>
            {project.name ? (
                <div className={style.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={style.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={style.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={style.project_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento </span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Categoria: </span> {project.cost}
                                    </p>
                                </div>
                            ) : (<div className={style.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText={"Concluir edição"} projectData={project} />
                            </div>)}
                        </div>
                        <div className={style.service_form_container}>
                            <h2>Adicionar serviço</h2>
                            <button className={style.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            <div className={style.project_info}>
                                {showServiceForm && (
                                        <ServiceForm
                                            handleSubmit={createService}
                                            btnText="Adicionar Serviço"
                                            projectData={project}  
                                            />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            {services.length > 0 && (
                                services.map((service) => {
                                    <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                    />
                                })
                            )}
                            {services.length === 0 && <p>Não há serviços adicionados</p>}
                        </Container>
                    </Container>
                </div>

            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project;