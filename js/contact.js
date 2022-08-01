 //Form Validation

 const form = document.getElementById('form');
 const fname = document.getElementById('fname'); 
 const lname = document.getElementById('lname'); 
 const txtarea = document.getElementById('txtarea');
 

   //Add events

   form.addEventListener('submit', (event) => {
       event.preventDefault();
       validate();
   })
  



   // Form Validation

   const validate = () => {

       const fnameVal = fname.value.trim();
       const lnameVal = lname.value.trim();
       const txtareaVal = txtarea.value.trim();

      
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

       //Commnet Validation

       if(txtareaVal == ""){
         setErrorMsg(txtarea, 'Required');
       }
       else if(txtareaVal.length < 50){
           setErrorMsg(txtarea, 'Required min 50 char');
       }
       else if(txtareaVal.length > 500){
           setErrorMsg(txtarea, 'Required max 500 char');
       }
       else{
           setSuccessMsg(txtarea);
       }






       successMsg(fnameVal);


      


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