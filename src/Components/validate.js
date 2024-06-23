const validate = (values) => {
let errors = {};

if(!values.name.trim()){
 errors.name = "Name is required";
}

if(!values.email){
    errors.email = "Email is required"
} else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email is not valid";
}

if(!values.PhoneNumber){
    errors.PhoneNumber = "Phone Number is required";
}else if(! /^\d+$/.test(values.PhoneNumber)) {
    errors.PhoneNumber = "Phone Number is not valid"
}

if(!values.positions){
    errors.positions = "Position is required"
}

if(values.positions === "developer" || values.positions === "designer"){
    if(!values.RelevantExperience){
        errors.RelevantExperience = "Relevant Experience is required"
    } else if(isNaN(values.RelevantExperience) || values.RelevantExperience <=0) {
        errors.RelevantExperience = "Relevant Experience must be a number greater than 0";
    }
}

if(values.positions === "manager") {
  if(!values.ManagerialExperience){
     errors.ManagerialExperience = "Managerial Experience is required"
  }else if (isNaN(values.ManagerialExperience) ||  values.ManagerialExperience <=0){
    errors.ManagerialExperience = "Managerial Experience must be a number greater than 0";
  }
}

if(values.positions === "manager"){
    if(!values.portfolioUrl){
        errors.portfolioUrl = "Portfolio URL is required";
    } else if(! /^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioUrl)){
        errors.portfolioUrl = "Portfolio URL is not valid";
    }
}

if(!values.skills || values.skills.length === 0) {
    errors.skills = "At least one skill must be selected";
}

if(! values.interviewTime) {
    errors.interviewTime = "Preferred Interview Time is Required";
} else if (isNaN(Date.parse(values.interviewTime))) {
    errors.interviewTime = "Preferred Interview Time is not valid"
}

return errors;

}

export default validate;