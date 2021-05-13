var pincoded;
var sessions;
function putstate(){
    // document.getElementById('show').style.display="block";
    // document.getElementById('hide').style.display="none";

    
    window.location = "./results.html"
    
    $.each(sessions, function (i) {
        console.log(sessions[i]);
        var statename = JSON.stringify(sessions[i].name);
        var stateid = JSON.stringify(sessions[i].center_id);
        console.log(statename,stateid)
        // temp = '<option value='+stateid+'>'+statename+'</option>';
        // temp = '<tr> <th scope="row">1</th><td>' +sessions[i].name+'</td> <td>'+sessions[i].available_capacity+'</td> <td>'+sessions[i].address+'</td> </tr>';
        // $('#tbody1').append(temp);

        var temp = '<div class="card-cont"><div class="card border-light mb-3" style="width: 85%;"><div class="row g-0"><div class="col-md-4 l-card"><h5 style="font-weight: 700;">Number of Slots</h5> <h1 style="font-weight: 700; font-size: 4em;">'+sessions[i].available_capacity+'</h1><h6>'+sessions[i].vaccine+'</h6></div><div class="col-md-8"><div class="card-body"><p style="font-weight: 700; margin-bottom: 10px;">'+13-05-2001+'</p><p style="font-weight: 700; margin-bottom: 5px;">'+sessions[i].name+'</p><p style=" margin-bottom: 10px;">'+sessions[i].address+'</p><p style="font-weight: 700; margin-bottom: 5px;">Slots</p><div class="slots"><div class="row"><div class="col-6 mb-3"><span>9AM-11AM</span></div><div class="col-6 mb-3"><span>11AM-1PM</span></div><div class="col-6 "><span>1PM-3PM</span></div><div class="col-6"><span>3PM-6PM</span></div></div></div></div></div></div></div></div>';
        $('#show').append(temp);
            });
}

function test(){
    pincoded = document.getElementById('pinc').value;
    $.getJSON( "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin", { pincode:+pincoded, date: "20-05-2021" } )
  .done(function( json ) {
      console.log(json.sessions);
      sessions= json.sessions;
      if(sessions.length == 0){
        //   alert("Sorry no slot available");
        document.getElementById('warn').style.display="block";          
        document.getElementById('noti').style.display="block";          
      }
      else{
        putstate();
      }
  });
}

function detail(){
    // document.getElementById('show').style.display="none";
    // document.getElementById('hide').style.display="none";
    // document.getElementById('warn').style.display="none";          
    // document.getElementById('noti').style.display="none"; 
    window.location = './form.html';
}