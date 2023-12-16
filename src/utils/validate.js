export const validateData = (email , password, name) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(name !== null && name.length < 2) return "Enter a Valid Name"
    if(!validEmail) return "Enter Valid Email";
    if(!validPassword) return "Enter Valid Password";

    return null;
}