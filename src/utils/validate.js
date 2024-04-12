
export const Validate = (fullname,email,password)=>{
    const isName=(/^[a-zA-Z ]{2,30}$/.test(fullname))
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password));

    if(!isName)return "Name is Not Valid";
    if(!isEmail)return "Email is Not Valid"
    if(!isPassword)return "Password is Not Valid";

    return (null);
}

