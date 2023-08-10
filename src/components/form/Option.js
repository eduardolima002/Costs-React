function Option({value, name}){
    return(
        <>
        <option key={value} value={value}>{name}</option>
        </>
    )
}

export default Option;