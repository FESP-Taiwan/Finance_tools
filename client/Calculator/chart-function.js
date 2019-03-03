var notion = 0;
var rate = 1;
var datas = [{y:"0",value:0,cost:0}];
var dt = new Date();
var nyear = dt.getFullYear();
var house_year=0;
var houst_cost=0;
var car_year=0;
var car_cost=0;
//console.log(nyear)
var  config = {
      data: datas,
      xkey: 'y',
      ykeys: ['value','cost'],
      labels: ['Total Income','Total Cost'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['red','blue']
  };
config.element = 'area-chart';
var area = Morris.Area(config);
function getMcost(p,r,n){
  p = parseInt(p);
  r = parseFloat(r);
  n = parseInt(n);
  r = (r/100)/12.0;
  let m = p*Math.pow(1+r,n)*r/(Math.pow(1+r,n)-1)
  return m;
}
function SetVal(){
  $('#values').val(notion);
  $("#rates").val(rate);
  $('#years').val(0);
  $('#inputs').val(0);
  $('#earns').val(0);
  $('#mCost').val(0);
  $('#wStart').val(0);
  $('#wEnded').val(0);
  //$('#wEnded').val(0);
}
$(document).ready(function(){
   SetVal();
})
$("#years").change(function(){
   if($(this).val()==""){
     return;
   }
   draw();
})
$("#values").change(function(){
  if($(this).val()==""){
     return;
   }
   draw();
})
$("#inputs").change(function(){
  if($(this).val()==""){
     return;
   }
   draw();
})
$("#rates").change(function(){
  if($(this).val()==""){
     return;
   }
   draw();
})
$("#wStart").change(function(){
  if($(this).val()==""){
     return;
   }
  let start = $(this).val();
  let end = $("#wEnded").val();
  //console.log(start,end);
  if(end==""){
    return;
  }
  else{
    let year = end-start;
    if(year>=0){
      //$('#years').val(year);
      draw();
    }else{
      alert('End must bigger than start');
      return;
    }
  }
})
$("#wEnded").change(function(){
  if($(this).val()==""){
     return;
   }
  let end = $(this).val();
  let start = $("#wStart").val();
  //console.log(start,end);
  if(start==""){
    return;
  }
  else{
    let year = end-start;
    if(year>=0){
      //$('#years').val(year);
      draw();
    }else{
      alert('End must bigger than start');
      return;
    }
  }
})
$("#mCost").change(function(){
  if($(this).val()==""){
     return;
   }
   draw();
})
$("#earns").change(function(){
  if($(this).val()==""){
     return;
   }
   draw();
})
$("#house_year").change(function(){
  if($(this).val()==""){
     return;
   }
  if($('#house_cost').val()==""){
    return;
  }
   else{
     house_year = parseInt($(this).val());
     house_cost = parseInt($('#house_cost').val());
     draw();
   }
})
$("#house_cost").change(function(){
  if($(this).val()==""){
     return;
   }
  if($('#house_year').val()==""){
    return;
  }
   else{
     house_year = parseInt($('#house_year').val());
     house_cost = parseInt($(this).val())
     draw();
   }
})
$("#car_year").change(function(){
  if($(this).val()==""){
     return;
   }
  if($('#car_cost').val()==""){
    return;
  }
   else{
     car_cost = parseInt($('#car_cost').val());
     car_year = parseInt($(this).val())
     draw();
   }
})
$("#car_cost").change(function(){
  if($(this).val()==""){
     return;
   }
  if($('#car_year').val()==""){
    return;
  }
   else{
     car_year = parseInt($('#car_year').val());
     car_cost = parseInt($(this).val())
     draw();
   }
})
function draw(){
  datas = [];
  var year = $('#years').val();
  let inflation = parseInt($('#inflation').text());
  console.log(inflation);
  let earns = parseInt($('#earns').val());
  earns = earns*12;
  let inputs = parseInt($('#inputs').val());
  inputs = inputs*12;
  if(inputs>earns){
    alert("earns must bigger than investment!");
    return;
  }
  let mCost = parseInt($('#mCost').val());
  let costSum = 0;
  let start = 0;
  let wstart = parseInt($('#wStart').val());
  let housestart = house_year - wstart;
  let houseend = housestart + 20;
  let carstart = car_year - wstart;
  let carend = carstart + 6;
  let houseCost = getMcost(house_cost,2,30*12);
  let carCost = getMcost(car_cost,2,6*12);
  console.log(houseCost,carCost);
  console.log(housestart,houseend);
  console.log(carstart,carend);
  let end = parseInt(year);
  let wend = parseInt($('#wEnded').val());
  notion = $('#values').val();
  rate = $('#rates').val();
  let sumInvest = 0;
  earns = earns - inputs;
  //console.log(inputs);
  let ratio = 1+parseFloat(rate)/100;
  let result = 0;
  //console.log(ratio)
  for(i=start;i<end+1;i++){
     if(housestart>0 && i>=housestart && i<=houseend){
       //console.log('house');
       costSum = costSum+houseCost*12;
     }
    if(carstart>0 && i>=carstart && i<=carend){
      //console.log('car'); 
      costSum = costSum+carCost*12;
     }
     if(i==0){
       sumInvest = sumInvest+parseInt(notion);
       notion = earns+inputs;
       costSum = mCost*12;
     }
    else if(i<wend+1){
      sumInvest = (sumInvest+inputs)*ratio;
      notion = notion+earns;
      costSum = costSum+(mCost*12)*(1+inflation/100);
    }else{
      sumInvest = (sumInvest+inputs)*ratio;
      costSum = costSum+(mCost*12)*(1+inflation/100);
    }
    //console.log(earns);
    //console.log(sumInvest);
    //console.log(notion);
     result = notion+sumInvest;
     var json = {"y":(nyear+i).toString(),"value":Math.round(result),
                "cost":Math.round(costSum)};
     datas.push(json);
  }
  $('#notion').text(number_format(result));
  $('#costFinal').text(number_format(costSum));
  //console.log(datas);
  area.setData(datas);
}
$('#target').click(function(){
  area.redraw();
});
function number_format(nums){
  return Math.round(nums).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
