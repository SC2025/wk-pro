
setTimeout(() => {
  alert(`प्रोड्कट आर्डर साठी फोटो खालील ब्लॅक कलर चे बटन आहेत ;
    तुम्हाला कोणत्या साईझ चा प्रोड्कट घेयचा आहे त्या नुसार त्या 
    बटन ला क्लिक करा`)
}, 9000);

  //pree order id
  function ORDER_ID_PREE() {
      myDate = new Date
            var hours = myDate.getHours(); 
            hours = hours % 24; 
            hours = hours ? hours : 24; 
            var minutes = myDate.getMinutes(); 
            minutes = minutes < 10 ? '0' + minutes : minutes; 
            var myTime = "सह्याद्री-" + minutes + hours + "-"
            document.getElementById("pree_id").innerHTML = myTime
          } ;  
          ORDER_ID_PREE()

//next order id
function ORDER_ID_NEXT(){
    
    // Creating the date instance
    let d = new Date();
    
    // Adding one date to the present date
    d.setDate(d.getDate() );
    
    let year = d.getFullYear()
    let month = String(d.getMonth() + 1)
    let day = String(d.getDate())
    
    // Adding leading 0 if the day or month
    // is one digit value
    month = month.length == 1 ?
    month.padStart('2', '0') : month;
    
    day = day.length == 1 ?
    day.padStart('2', '0') : day;
        //PRINTING TODAY DATE
        document.getElementById("today_date").innerHTML = `${day}.${month}.${year}`;
    // Printing the first id and last
    document.getElementById("last_id").innerHTML = `${month}${year}${day}`;

  };

    ORDER_ID_NEXT();

        //delivered date 
        function fifteen_days_after_date(){
    
    // Creating the date instance
    let d = new Date();
    
    // Adding one date to the present date
    d.setDate(d.getDate() + 15);
   
    let year = d.getFullYear()
    let month = String(d.getMonth() + 1)
    let day = String(d.getDate())
    
    // Adding leading 0 if the day or month
    // is one digit value
    month = month.length == 1 ?
    month.padStart('2', '0') : month;
    
    day = day.length == 1 ?
    day.padStart('2', '0') : day;

    // Printing the DELIVERY date
document.getElementById("order_del_date").innerHTML = `${day}.${month}.${year}`;

   };
   fifteen_days_after_date();
document.getElementById("final_id").innerHTML =  document.getElementById("pree_id").innerHTML + document.getElementById("last_id").innerHTML;



let button = document.querySelectorAll(".btn");

for(let i = 0; i<button.length; i++){
  button[i].addEventListener("click",function () {
 
      document.getElementById("product_price_result").innerHTML = this.value;
      document.getElementById("product_name_result").innerHTML = this.innerHTML;
  

      document.getElementById("all_pro_page").remove();

      document.getElementById("pp_div_1").style.opacity = "1";

      function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}topFunction();

    })
};




var product_name = document.getElementById("product_name_result");
var product_price = document.getElementById("product_price_result");
var product_quntity_P = document.getElementById("product-quntity");
var name_p = document.getElementById("name_result");
var city_city_p = document.getElementById("addres_result");
var fulladdress_p = document.getElementById("address_full_result");
var whatsappno_p = document.getElementById("mobno_result");
var whatsappno_rewrite_p = document.getElementById("mobnover_result");
//mob opacity 0
document.getElementById("mobbtn").addEventListener("click",function() {
  document.getElementById("mobnopara").style.opacity = "0";
})














document.getElementById("secA_btn").addEventListener("click",function () {

  if (name_p.value == "") {
 alert("dear customer कृपया नाव लिहा");
 name_p.style.backgroundColor = "rgb(239, 118, 118)";
}
else if(fulladdress_p.value == ""){
alert(`${name_p.value}
कृपया संपूर्ण पत्ता लिहा`);
fulladdress_p.style.backgroundColor = "rgb(239, 118, 118)";
}
else if(city_city_p.value == "Other"){
    alert(`${name_p.value}
     तुम्ही Other हा पर्याय  निवडला आहे.
    सह्याद्री कलेक्शन ची शाखा फक्त ऑपशन मध्ये दिलेल्या गावा मधेच आहे . 

   त्यामुळे त्या गावा मधील ऑपशन निवडा.
   
   तुमच्या विश्वासू मित्राचा किंवा नातेवाईकाचा पत्ता द्या.

    "Full detail Address:-" मध्ये पत्ता नीट लिहा जेणे करून आमची टीम तुमचे product घेऊन लवकर येईल`);
    city_city_p.style.backgroundColor = "rgb(239, 118, 118)";
}
else if(whatsappno_p.value == ""){
alert(
  `${ name_p.value} 
कृपया व्हॉट्सॲप चा मोबाईल नंबर लिहा`)
whatsappno_p.style.backgroundColor = "rgb(239, 118, 118)";
document.getElementById("mobnopara").style.opacity = "1";

}
else if(whatsappno_rewrite_p.value == ""){
  alert(
  `${ name_p.value}   
  कृपया व्हॉट्सॲप चा मोबाईल नंबर लिहा`)
  whatsappno_rewrite_p.style.backgroundColor = "rgb(239, 118, 118)";
  document.getElementById("mobnopara").style.opacity = "1";

}
else if(whatsappno_p.value.length != 10){
alert(
  `${name_p.value} तुम्ही
    10 अंकी मोबाईल नंबर एंटर करा 
    तुम्ही ${whatsappno_p.value.length} अंकी मोबाईल नंबर लिहित आहात 
    कृपया मोबाईल नंबर तपासा आणि पुन्हा लिहा`);
    document.getElementById("mobnopara").style.opacity = "1";
    whatsappno_p.backgroundColor = "rgb(239, 118, 118)";
  }
else if(whatsappno_p.value != whatsappno_rewrite_p.value){
alert(`${name_p.value} 
आपण ${whatsappno_p.value} आणि ${whatsappno_rewrite_p.value}
    लिहला आहे;
    मोबाईल नंबर मॅच होत नाही;

    टीप(कृपया दोन्ही ठिकाणी एकच मोबाईल नंबर लिहा)
    `);
    document.getElementById("mobnopara").style.opacity = "1";
    whatsappno_p.style.backgroundColor = "rgb(239, 118, 118)";
    whatsappno_rewrite_p.backgroundColor = "rgb(239, 118, 118)";
      document.getElementById("mobnopara").style.opacity = "1"
}
else{

//whatsapp no
var str = whatsappno_rewrite_p.value
 var n_1 = str.slice(0,2); 
 var n_2 = str.slice(2,4);
 var n_3 = str.slice(4,6);
 var n_4 = str.slice(6,8);
 var n_5 = str.slice(8,10);


  //name and address detail
  document.getElementById("name_and_address_sumury").innerText = 
  `
   ${name_p.value}.__
${city_city_p.value}.__
${fulladdress_p.value}.__
mobail no- ${n_1+"--"+n_2+"--"+n_3+"--"+n_4+"--"+n_5}.
  `





//product Quantity
var selectElement_prod_quantitye = product_quntity_P;
  var selectpro_quntity = selectElement_prod_quantitye.value;



//final bill
var transport_charge = 30;
  document.getElementById("final_bill").innerText = 
`FINAL BILL :-
product name= ${product_name.innerHTML}.
discount :- 20 %.
1 COMBO product price = ${product_price.innerHTML} RS.
quantity = ${selectpro_quntity} SET.
transport charges = 30 RS (1 SET).

BILL = product price x quantity (ADD) transport charges x quantity.`;

document.getElementById("finanl_amount").innerText = `BILL = ${product_price.innerHTML} RS X  ${selectpro_quntity} SET (ADD) ${transport_charge} RS X ${selectpro_quntity} SET = ${product_price.innerHTML * selectpro_quntity + transport_charge * selectpro_quntity} RS`

//qr up and down sms
document.getElementById("Payment_gatway1").innerHTML = `scan QR code and pay = ${product_price.innerHTML * selectpro_quntity + transport_charge * selectpro_quntity} RS`;
document.getElementById("Payment_gatway2").innerHTML = `scan QR code and pay = ${product_price.innerHTML * selectpro_quntity + transport_charge * selectpro_quntity} RS`;

document.getElementById("pp_div_1").remove();
document.getElementById("pp_div_2").style.opacity = "1";


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}topFunction();

setTimeout(() => {
  alert(`${name_p.value}
  ${product_price.innerHTML * selectpro_quntity + transport_charge * selectpro_quntity} RS पेमेंट करण्यासाठी कोणत्याही पेमेंट अँप ने हा QR कोड स्कॅन करा आणि पेमेंट पूर्ण झाल्यांनतर ट्रान्झॅक्शन आयडीचे शेवटचे 4 अंक लिहा
  `)
}, 8000);
}
//CHACK MARK
document.getElementById("chak_mark").innerHTML = `वरील सर्व माहिती मी काळजीपूर्वक भरली आहे .मी ${name_p.value} मला सर्व अटी आणि नियम मान्य आहेत.`

//colour 
      //LEGGIND AND JEAND OPACITY
      if(product_name.innerHTML == "Lyra leggings ANKLE length" ||
       product_name.innerHTML == "Lyra leggings FULL length"|| 
       product_name.innerHTML == "Hirshita L sizw leggins"|| 
       product_name.innerHTML == "Hirshita XL sizw leggins")
       {
  document.getElementById("JEANS").remove();
  document.getElementById("Petticoat").remove();
  alert(`${name_p.value}
  select your ${product_name_last_name} colour;
  `)
}
else if(product_name.innerHTML == "JEANS"){
  document.getElementById("LEGGINS").remove();
  document.getElementById("Petticoat").remove();
  alert(`${name_p.value}
  select your ${product_name_last_name} colour;
  `)
}
else if(product_name.innerHTML == "Petticoats 38-40 no."||
product_name.innerHTML == "Petticoats 42 no."){
  document.getElementById("LEGGINS").remove();
  document.getElementById("JEANS").remove();
  alert(`${name_p.value}
  select your ${product_name_last_name} colour;
  `)
}
else{
  document.getElementById("L&j&p_DIV").remove();
  
}



})








//whatsapp go data
document.getElementById("gotowhatsapp").addEventListener("click",function(){
  


  if(product_name.innerHTMLL == "Lyra leggings ANKLE length" ||
product_name.innerHTML.innerHTML == "Lyra leggings FULL length"|| 
product_name.innerHTML.innerHTML =="Hirshita L sizw leggins"|| 
product_name.innerHTML.innerHTML == "Hirshita XL sizw leggins"){
  var selectElement_L1_COL = document.getElementById("leggise_1");
  var COL_L1 = selectElement_L1_COL.options[selectElement_L1_COL.selectedIndex].text;
  document.getElementById("col_last_1").innerHTML = COL_L1;
console.log(COL_L1);
var COLOUR1 = COL_L1;

  var selectElement_L2_COL = document.getElementById("leggise_2");
  var COL_L2 = selectElement_L2_COL.options[selectElement_L2_COL.selectedIndex].text;
  document.getElementById("col_last_2").innerHTML = COL_L2;
  console.log(COL_L2);
  var COLOUR2 = COL_L2;

  var selectElement_L3_COL = document.getElementById("leggise_3");
  var COL_L3 = selectElement_L3_COL.options[selectElement_L3_COL.selectedIndex].text;
  document.getElementById("col_last_3").innerHTML = COL_L3;
console.log(COL_L3);
var COLOUR3 = COL_L3;

}
else if(product_name.innerHTML.innerHTML == "JEANS")
{
  var selectElement_J1_COL = document.getElementById("jeans_1");
  var COL_J1 = selectElement_J1_COL.options[selectElement_J1_COL.selectedIndex].text;
  document.getElementById("col_last_1").innerHTML = COL_J1;
console.log(COL_J1);
var COLOUR1 = COL_J1;

  var selectElement_J2_COL = document.getElementById("jeans_2");
  var COL_J2 = selectElement_J2_COL.options[selectElement_J2_COL.selectedIndex].text;
  document.getElementById("col_last_2").innerHTML = COL_J2;
  console.log(COL_J2);
  var COLOUR2 = COL_J2;


  var selectElement_J3_COL = document.getElementById("jeans_3");
  var COL_J3 = selectElement_J3_COL.options[selectElement_J3_COL.selectedIndex].text;
  document.getElementById("col_last_3").innerHTML = COL_J3;
console.log(COL_J3);
var COLOUR3 = COL_J3;


}
else if(product_name.innerHTML == "Petticoats 38-40 no."||
product_name.innerHTML == "Petticoats 38-40 no."){
  var selectElement_P1_COL = document.getElementById("Petticoat_1");
  var COL_P1 = selectElement_P1_COL.options[selectElement_P1_COL.selectedIndex].text;
  document.getElementById("col_last_1").innerHTML = COL_P1;
console.log(COL_P1);
var COLOUR1 = COL_P1;

  var selectElement_P2_COL = document.getElementById("Petticoat_2");
  var COL_P2 = selectElement_P2_COL.options[selectElement_P2_COL.selectedIndex].text;
  document.getElementById("col_last_2").innerHTML = COL_P2;
  console.log(COL_P2);
  var COLOUR2 = COL_P2;


  var selectElement_P3_COL = document.getElementById("Petticoat_3");
  var COL_P3 = selectElement_P3_COL.options[selectElement_P3_COL.selectedIndex].text;
  document.getElementById("col_last_3").innerHTML = COL_P3;
console.log(COL_P3);
var COLOUR3 = COL_P3;

}
else{
  var COLOUR1 = "NA";
  var COLOUR2 = "NA";
  var COLOUR3 = "NA";
};





 if (document.getElementById("transaction_id").value == ""){
alert(`${name_p.value}
 ट्रान्झॅक्शन आयडीचे शेवटचे 4 अंक  लिहा`)
document.getElementById("transaction_id").style.backgroundColor = "rgb(239, 118, 118)";
}
  else if(document.getElementById("transaction_id").value.length != 4 ){
alert(`${name_p.value}
ट्रान्झॅक्शन आयडीचे शेवटचे 4 अंक लिहा ;
तुम्ही ${document.getElementById("transaction_id").value.length} अंक लिहत आहात.

ट्रान्झॅक्शन आयडी तपासा आणि पुन्हा लिहा`)
  }
else{

    var url = "https://wa.me/919834926132?text="

    + "Order Details" + "%0a"

    + "order ID -" +  document.getElementById("final_id").innerHTML + "%0a"  + "%0a"   

  +  document.getElementById("name_and_address_sumury").innerText + "%0a"+ "%0a" 

  + product_name.innerHTML  + "%0a" + "%0a" 

  +document.getElementById("finanl_amount").innerHTML + "%0a"  + "%0a" 

  +   COLOUR1 + "/" +  COLOUR2 + "/"  + COLOUR3 + "%0a"+ "%0a" 

  + "ORDER DATE" + " " + document.getElementById("today_date").innerHTML + "%0a"

    + "order delivery before" + " " + document.getElementById("order_del_date").innerHTML + "*" + "%0a"+ "%0a" 

  + "trans.ID:-XXXXXXX" + document.getElementById("transaction_id").value  + "%0a"+ "%0a" 

  + "send SMS"
  window.open(url,'_blank').focus();
};
})




  
