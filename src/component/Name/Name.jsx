import './Name.css';
function Name({firstname, lastname}){
    return (
        <div>
            <h1 className ='text-yellow'>{firstname} <span>{lastname}</span></h1>
        </div>
    )
}

export default Name;