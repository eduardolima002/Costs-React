import style from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description, handleRemove}){
    return (
        <div className={style.project_card}>
            <h4>{name}</h4>
        </div>
    )
}

export default ServiceCard;