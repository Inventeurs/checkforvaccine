var pincoded;
var sessions;
var today =new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
function putstate(){
    document.getElementById('show').style.display="block";
    document.getElementById('hide').style.display="none";
    $.each(sessions, function (i) {
        console.log(sessions[i]);
        var statename = JSON.stringify(sessions[i].name);
        var stateid = JSON.stringify(sessions[i].center_id);
        console.log(statename,stateid)
        // temp = '<option value='+stateid+'>'+statename+'</option>';
        temp = '<tr> <th scope="row">1</th><td>' +sessions[i].name+'</td> <td>'+sessions[i].available_capacity+'</td> <td>'+sessions[i].address+'</td> </tr>';
        $('#tbody1').append(temp);
            });
}

function test(){
    pincoded = document.getElementById('pinc').value;
    $.getJSON( "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin", { pincode:+pincoded, date: "15-05-2021" } )
  .done(function( json ) {
      console.log(json.sessions);
      sessions= json.sessions;
      if(sessions.length == 0){
          alert("Sorry no slot available");
          alert(date);
      }
      else{
        putstate();
      }
  });
}
