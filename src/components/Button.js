let Button = (props)=>{
    return <button className={`btn ${props.otherclass}`} onClick ={props.click}>{props.btnValue}</button>;
}
export default Button;