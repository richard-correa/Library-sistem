const inputName = document.getElementById("name");
const inputProfile = document.getElementById("profile");
const inputPhone = document.getElementById("phone");
const inputPage = document.getElementById("web_page");
const inputHobies = document.getElementById("hobies");
const inputEducation = document.getElementById("education");
const inputJobs = document.getElementById("jobs");
const inputSkills = document.getElementById("skills");
const inputEmail = document.getElementById("email");
const select_position_type = document.getElementById("position-type");



function Create(){

    if(Validate()){
        const valueNames =inputName.value;
        const valueProf = inputProfile.value;
        const valuePosition = select_position_type.value;
        const valueEmais = inputEmail.value;
        const valuePhones = inputPhone.value;
        const valueWeb = inputPage.value;
        const ValueHobies =inputHobies.value;
        const valueJob =inputJobs.value;
        const ValueEducations =inputEducation.value;
        const ValueSkill =inputSkills.value;

        `creating the html`
        const mainContainer =document.getElementById("contact-container");
        ``
        const divCol2 = document.createElement("div");
        divCol2.setAttribute("class","col-2 bg-dark");
        mainContainer.appendChild(divCol2);
        ``
        const img = document.createElement("img");
        img.setAttribute("src","assets/img/profile.jpg");
        ``
        const hr1= document.createElement("hr");
        hr1.setAttribute("width","100");
        divCol2.appendChild(hr1);
        ``
        const h5_1 =document.createElement("h5");
        h5_1.setAttribute("class","card-title text-white text-center");
        h5_1.innerText ="Name";
        divCol2.appendChild(h5_1);
        ``
        const p1= document.createElement("p");
        p1.setAttribute("class","card-text text-white text-center")
        p1.innerText=valueNames;
        divCol2.appendChild(p1);
        ``
        const hr122= document.createElement("hr");
        hr122.setAttribute("width","100");
        divCol2.appendChild(hr122);
        
        ``
        const p122= document.createElement("p");
        p122.setAttribute("class","card-text text-white text-center")
        p122.innerText=valuePosition;
        divCol2.appendChild(p122);
        ``
        const hr2=document.createElement("hr");
        hr2.setAttribute("width","100");
        divCol2.appendChild(hr2);
        ``
        const h5_2 =document.createElement("h5");
        h5_2.setAttribute("class","card-title text-white text-center");
        h5_2.innerText ="Profile";
        divCol2.appendChild(h5_2);
        ``
        const p2= document.createElement("p");
        p2.setAttribute("class","card-text text-white text-center")
        p2.innerText=valueProf;
        divCol2.appendChild(p2);
        ``
        const h5_3 =document.createElement("h5");
        h5_3.setAttribute("class","card-title text-white text-center");
        h5_3.innerText ="Contact";
        divCol2.appendChild(h5_3);
        ``
        const p3= document.createElement("p");
        p3.setAttribute("class","card-text text-white text-center")
        p3.innerText=valueEmais;
        divCol2.appendChild(p3);
        ``
        const p4= document.createElement("p");
        p4.setAttribute("class","card-text text-white text-center")
        p4.innerText=valuePhones;
        divCol2.appendChild(p4);
        ``
        const p5= document.createElement("p");
        p5.setAttribute("class","card-text text-white text-center")
        p5.innerText=valueWeb;
        divCol2.appendChild(p5);
        
        ``
        const hr3=document.createElement("hr");
        hr3.setAttribute("width","100");
        divCol2.appendChild(hr3);
        ``
        const divMb3 =document.createElement("div");
        divMb3.setAttribute("class","mb-3");
        divCol2.appendChild(divMb3);
        ``
        const h5_4 =document.createElement("h5");
        h5_4.setAttribute("class","card-title text-white text-center");
        h5_4.innerText ="Hobby";
        divMb3.appendChild(h5_4);
        ``
        const ol =document.createElement("ol");
        ol.setAttribute("class","list-group list-group-numbered");
        divMb3.appendChild(ol);
        ``
        const li =document.createElement("li");
        li.setAttribute("class","list-group-item text-center");
        li.innerText=ValueHobies;
        ol.appendChild(li);
        ``
        const divCol10 = document.createElement("div");
        divCol10.setAttribute("class","col-10 bg-dark");
        mainContainer.appendChild(divCol10);
        ``
        const hr4=document.createElement("hr");
        hr4.setAttribute("width","100");
        divCol10.appendChild(hr4);
        ``
        const h3=document.createElement("h3");
        h3.setAttribute("class","text-white text-center");
        h3.innerText="Employment";
        divCol10.appendChild(h3);
        ``
        const hr5=document.createElement("hr");
        hr5.setAttribute("width","100");
        divCol10.appendChild(hr5);
        ``
        const hr6=document.createElement("hr");
        hr6.setAttribute("width","100");
        divCol10.appendChild(hr6);
        ``
        const ol1 =document.createElement("ol");
        ol1.setAttribute("class","list-group list-group-numbered");
        divCol10.appendChild(ol1);
        ``
        const li2 =document.createElement("li");
        li2.setAttribute("class","list-group-item text-center");
        li2.innerText =valueJob
        ol1.appendChild(li2);
        const hr7=document.createElement("hr");
        hr7.setAttribute("width","100");
        divCol10.appendChild(hr7);
        ``
        const h3_1=document.createElement("h3");
        h3_1.setAttribute("class","text-white text-center");
        h3_1.innerText="Education";
        divCol10.appendChild(h3_1);
        ``
        const hr8=document.createElement("hr");
        hr8.setAttribute("width","100");
        divCol10.appendChild(hr8);
        ``
        const hr9=document.createElement("hr");
        hr9.setAttribute("width","100");
        divCol10.appendChild(hr9);
        
        ``
        const ol2 =document.createElement("ol");
        ol2.setAttribute("class","list-group list-group-numbered");
        divCol10.appendChild(ol2);
        ``
        const li3 =document.createElement("li");
        li3.setAttribute("class","list-group-item text-center");
        li3.innerText=ValueEducations;
        ol2.appendChild(li3);
        ``
        const hr_10=document.createElement("hr");
        hr_10.setAttribute("width","100");
        divCol10.appendChild(hr_10);
        ``
        const h3_2=document.createElement("h3");
        h3_2.setAttribute("class","text-white text-center");
        h3_2.innerText="Skills";
        divCol10.appendChild(h3_2);
        ``
        const hr_11=document.createElement("hr");
        hr_11.setAttribute("width","100");
        divCol10.appendChild(hr_11);
        ``
        const hr_12=document.createElement("hr");
        hr_12.setAttribute("width","100");
        divCol10.appendChild(hr_12);
        ``
        const ol3 =document.createElement("ol");
        ol3.setAttribute("class","list-group list-group-numbered");
        divCol10.appendChild(ol3);
        ``
        const li4 =document.createElement("li");
        li4.setAttribute("class","list-group-item text-center");
        li4.innerText=ValueSkill
        ol3.appendChild(li4);
        ``
        const hr_13=document.createElement("hr");
        hr_13.setAttribute("width","100");
        divCol10.appendChild(hr_13);
        ``
        const divgrid = document.createElement("div");
        divgrid.setAttribute("class","d-grid gap-2");
        divCol10.appendChild(divgrid);
        ``
        const btn= document.createElement("button");
        btn.setAttribute("class","btn btn-outline-danger");
        btn.innerText ="Delete";
        btn.addEventListener("click",function(){
            if(confirm("esta seguro que desea eliminar este cv")){
                mainContainer.removeChild(divCol2);
                mainContainer.removeChild(divCol10);
            }
        });
        

        
        divgrid.appendChild(btn);
        
        Clear();
    }else{
        alert("debe completar toda la info")

    }


}



function Validate(){
    let isvalid = true;

    `validate name value`
    const ValueName= inputName.value;

    if (ValueName == "" || ValueName == null || ValueName == undefined) {
        inputName.classList.add("input-error")
        isvalid = false;
    } else {
        inputName.classList.remove("input-error");
    }

    `validate profile value`
    const ValueProfile =inputProfile.value;

    if (ValueProfile == "" || ValueProfile == null || ValueProfile == undefined) {
        inputProfile.classList.add("input-error");
        isvalid = false;
    } else {
        inputProfile.classList.remove("input-error");
    }

    `validate phone value`
    const ValuePhone = inputPhone.value;

    if (ValuePhone == "" || ValuePhone == null || ValuePhone == undefined) {
        inputPhone.classList.add("input-error");
        isvalid = false;
    } else {
        inputPhone.classList.remove("input-error");
    }

    `validate web_page`
    const ValuePage = inputPage.value;

    if (ValuePage == "" || ValuePage == null || ValuePage == undefined) {
        inputPage.classList.add("input-error");
        isvalid = false;
    } else {
        inputPage.classList.remove("input-error");
    }

    `validate hobies`
    const ValueHobies = inputHobies.value;

    if (ValueHobies == "" || ValueHobies == null || ValueHobies == undefined) {
        inputHobies.classList.add("input-error");
        isvalid = false;
    } else {
        inputHobies.classList.remove("input-error");
    }
    `validate education`
    const ValueEducation = inputEducation.value;

    if (ValueEducation == "" || ValueEducation == null || ValueEducation == undefined) {
        inputEducation.classList.add("input-error");
        isvalid = false;
    } else {
        inputEducation.classList.remove("input-error");
    }
    `validate jobs`
    const ValueJobs = inputJobs.value;

    if (ValueJobs == "" || ValueJobs == null || ValueJobs == undefined) {
        inputJobs.classList.add("input-error");
        isvalid = false;
    } else {
        inputJobs.classList.remove("input-error");
    }
    `validate skills`
    const ValueSkills = inputSkills.value;

    if (ValueSkills == "" || ValueSkills == null || ValueSkills == undefined) {
        inputSkills.classList.add("input-error");
        isvalid = false;
    } else {
        inputSkills.classList.remove("input-error");
    }
    `validate position_type `
    const valuePositionType = select_position_type.value;
    if (valuePositionType == "" || valuePositionType == null || valuePositionType == undefined) {
        select_position_type.classList.add("input-error");
        isvalid = false;
    } else {
        select_position_type.classList.remove("input-error");
    }
    `validate email`
    const valueEmail = inputEmail.value;
    if (valuePositionType == "" || valuePositionType == null || valuePositionType == undefined) {
        select_position_type.classList.add("input-error");
        isvalid = false;
    } else {
        select_position_type.classList.remove("input-error");
    }

    return isvalid;

    
}
function Clear(){

    inputName.value = "";
  inputName.classList.remove("input-error");
  inputName.focus();

  inputProfile.classList.remove("input-error");
  inputProfile.value = "";

  inputPhone.classList.remove("input-error");
  inputPhone.value = "";

  inputPage.classList.remove("input-error");
  inputPage.value = "";

  inputHobies.classList.remove("input-error");
  inputHobies.value = "";

  inputEducation.classList.remove("input-error");
  inputEducation.value = "";

  inputJobs.classList.remove("input-error");
  inputJobs.value = "";

  inputSkills.classList.remove("input-error");
  inputSkills.value = "";

  inputEmail.classList.remove("input-error");
  inputEmail.value="";

  select_position_type.classList.remove("input-error");
  select_position_type.value = "";
}