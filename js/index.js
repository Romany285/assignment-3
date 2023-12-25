 var productNameInput = document.getElementById("productNameInput");
 var productUrlInput = document.getElementById("productUrlInput");
 var productList = []; //array
 if(localStorage.getItem("bookmarks") != null){//عشان لو الليست فاضيه هتبقى قيمتها ب نل ف هيضرب ايرور
  productList = JSON.parse(localStorage.getItem("bookmarks"));//json for string to array //productlist for = array
}
displayData();
 function addProduct (){
    if(validationName() && validationUrl()){
      var product = {
        name: productNameInput.value ,
        url: productUrlInput.value 
    };
    productList.push(product);
    clearForm()
    displayData ()
    console.log(product)
    localStorage.setItem("bookmarks",JSON.stringify(productList))
    }
     
 }
 function clearForm (){
    productNameInput.value = "",
    productUrlInput.value = ""
 }
 function displayData (){
    var cartona = ""
    for(var i = 0 ; i<productList.length ; i++){
        cartona += `
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>
          <button class="btn btn-visit ">Visit</button>
          
        </td>
        <td>
          <button onclick="deleteItem(${i});" class="btn btn-delete ">Delete</button>
        </td>
      </tr>
        `
        
    }
    document.getElementById("tableBody").innerHTML=cartona
 }
 function deleteItem(index){
     productList.splice(index,1);
     displayData()
     console.log(productList)
     localStorage.setItem("bookmarks",JSON.stringify(productList))
 }
 function validationName(){
  var text = productNameInput.value ;
  var regexName =/\w{3,}/;
   if(regexName.test(text)){
    productNameInput.classList.add("is-valid")
    productNameInput.classList.remove("is-invalid")
    return true
   }
   else{
    productNameInput.classList.add("is-invalid")
    productNameInput.classList.remove("is-valid")
    return false
   }
  }
  function validationUrl(){
    var text = productUrlInput.value ;
    var regexUrl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
     if(regexUrl.test(text)){
      productUrlInput.classList.add("is-valid")
      productUrlInput.classList.remove("is-invalid")
      return true
     }
     else{
      productUrlInput.classList.add("is-invalid")
      productUrlInput.classList.remove("is-valid")
      return false
     }
    }
     