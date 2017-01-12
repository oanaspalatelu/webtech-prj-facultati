
/*global $*/

function saveRecord() {
    var formData = $('#record_form').serializeObject();
    var nume = document.getElementById('nume').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    if(nume==""){
        alert("introduceti nume");
    }else{
        if(email==""){
            alert("introduceti email");
        }
        else{
            if(comment==""){
                alert("introduceti comment");
            }
            else{
                createRecord(formData);
            }
        }
    } 
    
 
        
    
}
function createRecord(formData) {
    $.ajax({
        url: '/mails/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#add_new_record_modal').modal('hide');
            
           
        } 
    });
}



//extending jQuery with a serializeObject method so that form values can be retrieved as JSON objects
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


