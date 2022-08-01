const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  let formStepsNum = 0;

  nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
  });
  });

  prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
  });
  });

  function updateFormSteps() {
  formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
      } 
      else {
      progressStep.classList.remove("progress-step-active");
      }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
      
  }


//Form Validation

  const form = document.getElementById('form');
  const fname = document.getElementById('fname'); 
  const lname = document.getElementById('lname'); 
  const phone = document.getElementById('phone'); 
  const email = document.getElementById('email'); 

  const cardNo = document.getElementById('cardNo'); 
  const cvvNo = document.getElementById('cvvNo'); 
  const expMonth = document.getElementById('expMonth'); 
  const expYear = document.getElementById('expYear'); 
  

    //Add events

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validate();
    })
   
    //Send data function

    const sendData = (fnameVal, sRate, count) => {
        if(sRate === count) {
            swal("Welcome!"+fnameVal, "Registration Successfull", "success");
        }
    }

    //for final data validation

    const successMsg = (fnameVal) => {
        let inputgr = document.getElementsByClassName("input-group");
        var count = inputgr.length - 1;

        for(var i = 0; i < inputgr.length; i++){
            if(inputgr[i].className === "input-group success") {
                var sRate = 0 + i;
                sendData(fnameVal, sRate, count);
            }
            else{
                return false;
            }
        }
    }

 
    // Form Validation

    const validate = () => {

        const fnameVal = fname.value.trim();
        const lnameVal = lname.value.trim();
        const phoneVal = phone.value.trim();
        const emailVal = email.value.trim();
        const cardNoVal = cardNo.value.trim();
        const cvvNoVal = cvvNo.value.trim();

        const expMonthVal = expMonth.value.trim();
        const expYearVal = expYear.value.trim();
       
        //First name validation
        if(fnameVal == ""){
            setErrorMsg(fname, 'Required');
        }
        else if(!fnameVal.match(/^[A-Za-z]*$/)){
            setErrorMsg(fname, 'Please enter only char');
        }
        else if(fnameVal.length <= 2 ){
            setErrorMsg(fname, 'Required min 3 char');
        }
        else if(fnameVal.length > 10){
            setErrorMsg(fname, 'Required max 10 char');
        }
        else{
            setSuccessMsg(fname);
        }

        //second name validation

        if(lnameVal == ""){
            setErrorMsg(lname, 'Required');
        }
        else if(!lnameVal.match(/^[A-Za-z]*$/)){
            setErrorMsg(lname, 'Please enter only char');
        }
        else if(lnameVal.length <= 2){
            setErrorMsg(lname, 'Required min 3 char');
        }
        else if(lnameVal.length > 10){
            setErrorMsg(lname, 'Required max 10 char');
        }
        
        else{
            setSuccessMsg(lname);
        }

        //phone validation
        if(phoneVal == ""){
            setErrorMsg(phone, 'Required');
        }
        else if(phoneVal.length < 10 ){
            setErrorMsg(phone, 'Invalid phone number');

        }
        else if(phoneVal.length > 13){
            setErrorMsg(phone, 'Invalid phone number');

        }
        else{
             setSuccessMsg(phone);
        } 



        //email validation

        if(emailVal === ""){
                setErrorMsg(email, 'Required');

            }
        else if(!isEmail(emailVal)){
            setErrorMsg(email, 'Invalid Email');

        }
        else{
            setSuccessMsg(email);
        }

        //card no validation

        if(cardNoVal === ""){
          setErrorMsg(cardNo, "Required")
        }

        else if(cardNoVal.length != 14 ){
            setErrorMsg(cardNo, 'Invalid card number');

        }
        else{
            setSuccessMsg(cardNo);
        }

        //cvv number validation
        if(cvvNoVal === ""){
          setErrorMsg(cvvNo, "Required")
        }

        else if(cvvNoVal.length != 3 ){
            setErrorMsg(cvvNo, 'Invalid CVV number');

        }
        else{
            setSuccessMsg(cvvNo);
        }

        //Drop down validation

        //Month
        if(expMonthVal === ""){
          setErrorMsg(expMonth, 'Required');
        }
        else{
          setSuccessMsg(expMonth)
        }

        //Year
        if(expYearVal === ""){
          setErrorMsg(expYear, 'Required');
        }
        else{
          setSuccessMsg(expYear)
        }


        successMsg(fnameVal);


       


    }


 //more email validation
 const isEmail = (emailVal) =>{
            var atSymbol = emailVal.indexOf("@");
            if(atSymbol < 1) return false;
            
            var dot = emailVal.lastIndexOf(".");
            if(dot <= atSymbol + 2){
                return false;
            } 

            if(dot === emailVal.length - 1){
                return false;
            } 
            else{
                return true;
            }
           

        } 

    function setErrorMsg(input, errormsgs) {
        const inputgroup = input.parentElement;
        const small = inputgroup.querySelector('small');
        inputgroup.className = "input-group error";
        small.innerText = errormsgs;
    }


    function setSuccessMsg(input) {
        const inputgroup = input.parentElement;
        inputgroup.className = "input-group success";
    }
