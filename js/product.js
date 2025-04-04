



var items = 0;

$(document).ready(function(){
   $("#edit").click(function(){
      editpage();
    })



    //DELETE BTN

    $(document).on("click",".btn-del",function(){
      deleteitem(this);
    });

    //edit btn

    $(document).on("click",".edit",function(){
      editpage(this);
    });
    
    
    $("#new-prod").submit(function(e){
        e.preventDefault();
        registerprod();
    });



    $("#form-edit-prod").submit(function(e){
      e.preventDefault();
      savechanges();
  });
}); 







//edit function
function editpage(btn){
  let name = $(btn).attr("data-name");
  let desc = $(btn).attr("data-desc");
  let price = $(btn).attr("data-price");
  let pic = $(btn).attr("data-url");
  let counter = $(btn).attr("data-id");

  $("#edit-prod").val(name);
  $("#edit-desc").val(desc);
  $("#edit-price").val(price);
  $("#edit-pic").val(pic);
  $("#edit-counter").val(counter);


  



  $("#edit-modal").modal("show");


}

function deleteitem(btn) {
  let id = $(btn).attr("data-id");
  $("#tr_" + id).fadeOut("fast");
};


function registerprod() {

    items++;
    
    
    let name = $("#inp-prod").val();
    let desc = $("#inp-desc").val();
    let price = $("#inp-price").val();
    let pic = $("#inp-pic").val();

    let html = " ";
    html += "<tr id='tr_"+items+"' class='text-center justify-content-center'>";
    html += "<td>"+items+"</td>";
    html += "<td> <img src= '"+ pic +"' width='50px' /> </td>";
    html += "<td>"+name+"<br>"+desc+"</td>";
    html += "<td>"+price+"</td>";
    html += "<td>";
      html += '<div class="btn-group text-center" role="group " >';
        html += '<button data-id="'+items+'" data-name="'+name+'" data-desc="'+desc+'" data-price="'+price+'" data-url="'+pic+'" type="button" class="btn btn-outline-primary edit">edit</button>';
        html += '<button data-id="'+items+'" type="button" class="btn btn-del btn-outline-danger">delete</button>';
      html += '</div>';
    html += "</td>";
    html += "</tr>"
    


    $("#cuerpo").append(html);

    $("#mymodal").modal("hide");

    
}



function savechanges(){
    let name = $("#edit-prod").val();
    let desc = $("#edit-desc").val();
    let price = $("#edit-price").val();
    let pic = $("#edit-pic").val();
    let counter = $("#edit-counter").val();
    
    $("#tr_" + counter).html("");

    let html = " ";
    html += "<td>"+counter+"</td>";
    html += "<td> <img src= '"+ pic +"' width='50px' /> </td>";
    html += "<td>"+name+"<br>"+desc+"</td>";
    html += "<td>"+price+"</td>";
    html += "<td>";
      html += '<div class="btn-group text-center" role="group " >';
        html += '<button data-id="'+counter+'" data-name="'+name+'" data-desc="'+desc+'" data-price="'+price+'" data-url="'+pic+'" type="button" class="btn btn-outline-primary edit">edit</button>';
        html += '<button data-id="'+counter+'" type="button" class="btn btn-del btn-outline-danger">delete</button>';
      html += '</div>';
    html += "</td>";

    $("#tr_" + counter).html(html);






    $("#edit-modal").modal("hide");


}
    
    



