var items = 0;

$(document).ready(function(){
   $("#edit").click(function(){
      editpage();
    });

    // DELETE BUTTON
    $(document).on("click", ".btn-del", function(){
      deleteitem(this);
    });

    // EDIT BUTTON
    $(document).on("click", ".edit", function(){
      editpage(this);
    });

    // NEW LOG ENTRY FORM SUBMIT
    $("#new-log").submit(function(e){
        e.preventDefault();
        registerEntry();
    });

    // EDIT FORM SUBMIT
    $("#edit-log-form").submit(function(e){
      e.preventDefault();
      savechanges();
    });
});

// EDIT FUNCTION
function editpage(btn){
  let firstname = $(btn).attr("data-firstname");
  let lastname = $(btn).attr("data-lastname");
  let userClass = $(btn).attr("data-class");
  let counter = $(btn).attr("data-id");

  $("#edit-firstname").val(firstname);
  $("#edit-lastname").val(lastname);
  $("#edit-class").val(userClass);
  $("#edit-counter").val(counter);

  $("#edit-modal").modal("show");
}

// DELETE FUNCTION
function deleteitem(btn) {
  let id = $(btn).attr("data-id");
  $("#tr_" + id).fadeOut("fast");
}

// REGISTER NEW ENTRY FUNCTION
function registerEntry() {
  items++;
  
  let firstname = $("#inp-firstname").val();
  let lastname = $("#inp-lastname").val();
  let userClass = $("#inp-class").val();
  let now = new Date().toLocaleString();

  let html = "";
  html += "<tr id='tr_"+items+"' class='text-center justify-content-center'>";
  html += "<td>"+items+"</td>";
  html += "<td>"+firstname+"</td>";
  html += "<td>"+lastname+"</td>";
  html += "<td>"+userClass+"</td>";
  html += "<td>"+now+"</td>"; 
  html += "<td>";
  html += '<div class="btn-group text-center" role="group">';
  html += '<button data-id="'+items+'" data-firstname="'+firstname+'" data-lastname="'+lastname+'" data-class="'+userClass+'" type="button" class="btn btn-outline-primary edit">Edit</button>';
  html += '<button data-id="'+items+'" type="button" class="btn btn-del btn-outline-danger">Delete</button>';
  html += '</div>';
  html += "</td>";
  html += "</tr>";

  $("#log-body").append(html);
  $("#mymodal").modal("hide");
}

// SAVE CHANGES FUNCTION
function savechanges() {
  let firstname = $("#edit-firstname").val().trim();
  let lastname = $("#edit-lastname").val().trim();
  let userClass = $("#edit-class").val().trim();
  let counter = $("#edit-counter").val();

  // Validate inputs
  if (!firstname || !lastname || !userClass) {
      alert("All fields are required.");
      return;
  }

  // Get the current date/time cell value before it's overwritten
  let currentRow = $("#tr_" + counter);
  let dateTime = currentRow.find("td:eq(4)").text(); 

  // Build the updated row
  let html = "";
  html += "<td>" + counter + "</td>";
  html += "<td>" + $("<div>").text(firstname).html() + "</td>";
  html += "<td>" + $("<div>").text(lastname).html() + "</td>";
  html += "<td>" + $("<div>").text(userClass).html() + "</td>";
  html += "<td>" + dateTime + "</td>"; 
  html += "<td>";
  html += '<div class="btn-group text-center" role="group">';
  html += '<button data-id="' + counter + '" data-firstname="' + $("<div>").text(firstname).html() + '" data-lastname="' + $("<div>").text(lastname).html() + '" data-class="' + $("<div>").text(userClass).html() + '" type="button" class="btn btn-outline-primary edit">Edit</button>';
  html += '<button data-id="' + counter + '" type="button" class="btn btn-del btn-outline-danger">Delete</button>';
  html += '</div>';
  html += "</td>";

  // Update the row
  currentRow.html(html);

  // Hide the modal
  $("#edit-modal").modal("hide");
}

