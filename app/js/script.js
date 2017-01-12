
/*global $*/
$(document).ready(function () {
    readSomeRecords3(); // calling function
});



// READ records
function readSomeRecords(tema) {
     $.get("/mails/", {}, function (data, status) {
         $('#mails').empty();
        data.forEach(function(value) {
            
            
            var row = displaySomeColumns(value,tema);
            $('#mails').append(row);
        });
    });
}
function readSomeRecords3() {
     $.get("/articles/", {}, function (data, status) {
        data.forEach(function(value) {
            
            
            var row = displaySomeColumns2(value);
            $('#univ').append(row);
            
        });
    });
}


function displaySomeColumns(value,nume) {
    if(value.tema==nume){
        var id = value.id;
        var id2 ="'"+id+"'";
        
    return '<div>'
    +'<button >'+value.nume+'</button>'
			

	+ '<button >'+value.comment+'</button>'
//	+'<button onclick="deleteBtn()" > DELETE</button>'
    +'<button onclick="deleteRecord('+id2+')" > DELETE</button>'
	+'</div>';
    }
    else{
        return '';
    }
			
}
function displaySomeColumns2(value) {
    var bla = value.nume;
    var univ ="'"+bla+"'";
    return '<button onclick="readSomeRecords('+univ+')">'+value.nume+'</button>';
   
			
}

function deleteRecord(id) {
    
    $.ajax({
        url: '/mails/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}
function deleteBtn(){

    document.getElementById("myDialog").showModal(); 
} 











