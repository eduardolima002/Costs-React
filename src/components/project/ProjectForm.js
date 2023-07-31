function ProjectForm(){
    return (
            <form>
                <div><input type="text" placeholder="Insira o nome do projeto"/></div>
                <div><input type="text" placeholder="Insira o orçamento total"/></div>
                <div>
                    <select name="category_id">
                        <option disabled>Selecione a categoria</option>
                    </select>
                </div>
                <input type="submit"/>
            </form>
        )
}

export default ProjectForm