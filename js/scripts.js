
window.onload = function() {


 outputFlag = false;
 fechaSet = false;
 

let data = [];




  $('.sel').on('click', function(e) {
    // console.log(this.id)

    let idValue = this.id
    $('.' + idValue).css('display', 'flex').siblings().hide();
    


});


  /* ADD blocks */


  

    

    
        $("#addBlockButton").click(function () {
           $(this).text(function(i, text){
               return text === "+" ? "-" : "+";
           })
           $('.extraBlock3').toggle();
        });

        
     

    

 /* Generate table */

    $("#bOutput").click(function(){

        $("#output").css("display", "block");

        
        
        

/* Set table date */

        moment.locale("ca");
        let fecha = moment().add(1,'days').format("LL");

        if(!fechaSet){
            $("#output h3").append(`<span> ${fecha} </span>`)
        }
        
        fechaSet = true;
         
 /* Fill table */

        if(outputFlag){
            $("#outTable").empty()
            data = [];
        }


        let allItems = $('.itemP')

        
        let allItemsP = $(allItems.find('p')); 
        let allItemsInp = $(allItems.find('input'));



        $(".itemP").each(function() {
            var newObj = {}; 
            

            $(this).find("p.edit").each(function() {
                newObj['id'] = this.id; 
                newObj['value'] = this.innerText; 
            
              
            });
            $(this).find("input").each(function() {       // the <input> needs to be inside an .itemP element to be added to [data]          
              newObj['prem'] = $(this).prop( "checked" ) 
            
              
            });
            data.push(newObj);  
          });
        
         

         //console.log(data)



          // REMOVE alternative openings that are not being used

          
          if( $('#plant2i input').is(':checked') ){
            let idArr = ["AP_1-1", "AP_1-2", "Esp_1", "Esp_2", "Esp_3", "12_col"];
            data = data.filter(item => !idArr.includes(item.id));

          }else if($('#esp input').is(':checked')){
            let idArr = ["AP_1-1", "AP_1-2", "AP_1-1i", "AP_1-2i", "12_col"];
            data = data.filter(item => !idArr.includes(item.id));

          }else if($('#plant2d input').is(':checked')){
            let idArr = ["AP_1-1i", "AP_1-2i", "Esp_1", "Esp_2", "Esp_3", "12_col"];
            data = data.filter(item => !idArr.includes(item.id));

          }else if($('#full input').is(':checked')){
            let idArr = ["AP_1-1", "AP_1-2", "AP_1-1i", "AP_1-2i", "Esp_1", "Esp_2", "Esp_3"];
            data = data.filter(item => !idArr.includes(item.id));

          }

          

          

          console.log(data)




        outputFlag = true;

         let allCheck = $("input[type='checkbox']")
        
        
        

        // Filling table:

        $("#outTable").append(`<h4 class="plantillaAp"></h4>`)   //Append structure warning

        for(let i=0; i <data.length; i++){
            $("#outTable").append(`<p>`)

            if(data[i].value == "Lorem ipsum dolor sit amet consectetur adipisicing elit"  || data[i].value == "Titular de apertura a 3 líneas"){
                $("#outTable").append(`<span class="field1"> ${data[i].id} </span> <span class="field2"> <i> Pendiente de asignar </i> </span>`)
            }else{
                $("#outTable").append(`<span class="field1"> ${data[i].id} </span>  <span class="field2"> ${data[i].value} </span>`);
                
            } 
            if(data[i].prem === true){$("#outTable").append(`<span class="field3"> -- PREMIUM </span>`)}     
            
        }

        
        // Home structure warning

        let plantWarning = "";


        if( $('#plant2i input').is(':checked') ){
            plantWarning = "Apertura a 2-I";
        }else if($('#esp input').is(':checked')){
            plantWarning = "Apertura especial";
        }else if($('#full input').is(':checked')){
            plantWarning = "Apertura a 12 col";

        }else{
            plantWarning = "";
        }

      

        $('.plantillaAp').text(plantWarning)

        

    })
 
 
    
   
   










};

