var states;
var sid;
var today = new Date();
// $("#jq").click(function(){
//     var api = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
//     $.getJSON( api, function( json ) {
//         console.log(json.states)
//         states = json.states;
//        });
// });
$( document ).ready( function(){
  getstate();
});

function getstate(){
  var api = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
    $.getJSON( api, function( json ) {
        console.log(json.states)
        states = json.states;
       });
}

function putstate(){
    $.each(states, function (i) {
        console.log(states[i]);
        var statename = JSON.stringify(states[i].state_name);
        var state = statename.toString().replaceAll("\"", "");
        var stateid = JSON.stringify(states[i].state_id);
        sid = stateid.toString().replaceAll("\"", "");
        temp = '<option value='+sid+'>'+state+'</option>';
        $('#statelist').append(temp);
            });      
}
// var val = document.getElementById('tbody2');
var test; 
var temp ="";
var districts;


$("#tbody1").hover(function(){
  getdist();
},function(){})

function getdist(){
  test = $("#statelist :selected").val();
    console.log(test);
    var api = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+test;
    $.getJSON( api, function( json ) {
        console.log(json.districts)
        districts = json.districts;
        // console.log( "JSON Data: " + json.states[1].state_id + json.states[1].state_name );
       });
}
function putdist(){
  $.each(districts, function (i) {
    console.log(districts[i]);
    var distname = JSON.stringify(districts[i].district_name);
    var distnamev = distname.toString().replaceAll("\"", "");
    var distid = JSON.stringify(districts[i].district_id);
    temp = '<option value='+distid+'>'+distnamev+'</option>';
    $('#tbody1').append(temp);
        }); 
}
var resultid;

// function result(){
//   resultid = $("#tbody1 :selected").val();
//     console.log(resultid);
//     var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
//     var api = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+resultid+'&date='+date;
//     $.getJSON( api, function( json ) {
//         console.log(json.sessions)
//         districts = json.districts;
//         // console.log( "JSON Data: " + json.states[1].state_id + json.states[1].state_name );
//        });
// }
function result(){
  resultid = $("#tbody1 :selected").val();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  if (date != ""){
    console.log(date);
  $.getJSON( 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+resultid+'&date='+date )
.done(function( json ) {
    console.log(json.sessions);
    sessions= json.sessions;
    if(sessions.length == 0){
      //   alert("Sorry no slot available");
      // document.getElementById('warn').style.display="block";          
      // document.getElementById('noti').style.display="block";          
    }
    else{
      // putstate();
    }
});
  }
  else{
    console.log("vishuddh")
  }
  
}