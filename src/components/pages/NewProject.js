import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(project)
        })
        .then((response) => response.json())
        .then((data) =>{
            //redirect
            navigate('/projects', {state:{message: 'Projeto criado com sucesso!'}});
        })
        .catch((error) => console.log(error));
    }
    return (
            <div className={styles.newproject_container}>
                <h1>Criar Projetos</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm handleSubmit={createPost} btnText="Criar um projeto"/>
            </div>
        )
}

export default NewProject;