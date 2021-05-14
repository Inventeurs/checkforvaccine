var pincoded;
var sessions;
function putstate(){
    document.getElementById('show').style.display="block";
    document.getElementById('hide').style.display="none";    
    // window.location = "./results.html"
    
    $.each(sessions, function (i) {
        console.log(sessions[i]);
        var statename = JSON.stringify(sessions[i].name);
        var stateid = JSON.stringify(sessions[i].center_id);
        var address = JSON.stringify(sessions[i].address);
        var capacity = JSON.stringify(sessions[i].available_capacity);
        var vaccine = JSON.stringify(sessions[i].vaccine);
        var slotd = JSON.stringify(sessions[i].from);
        var date = JSON.stringify(sessions[i].date);
        console.log(statename,stateid,capacity)
        // temp = '<option value='+stateid+'>'+statename+'</option>';
        // temp = '<tr> <th scope="row">1</th><td>' +sessions[i].name+'</td> <td>'+sessions[i].available_capacity+'</td> <td>'+sessions[i].address+'</td> </tr>';
        // $('#tbody1').append(temp);

        // var temp = '<div class="card vaccine-card"> <div class="card-body vaccine-card-body" > <h5 class="card-title">'+statename+'</h5> <p class="card-text">'+address+'</p> <p>Slot:'+capacity+'</p> <button type="button" class="btn btn-outline-primary" class= "timing-button">'+slotd+'</button> </div> </div>';
        var temp = '<div class="card-cont"> <div class="card border-light mb-3"> <div class="row g-0"> <div class="col-md-4 l-card"> <h5 >Number of Slots</h5> <h1 >'+capacity+'</h1> <h6>'+vaccine+'</h6> </div> <div class="col-md-8"> <div class="card-body"> <h1>'+statename+'</h1> <p>'+address+'</p> <p class="date">'+date+'</p> </div> </div> </div> </div> </div>';
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