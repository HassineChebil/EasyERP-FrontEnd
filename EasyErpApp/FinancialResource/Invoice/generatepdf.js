(function(){
var 
 form = $('#content'),
 cache_width = form.width(),
 a4  =[ 595.28,  841.89];  
 
$('#create_pdf').on('click',function(){
 $('body').scrollTop(0);
 createPDF();
});

function createPDF(){
 getCanvas().then(function(canvas){
  var 
  img = canvas.toDataURL("image/png"),
  doc = new jsPDF({
          unit:'px', 
          format:'a4'
        });     
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('easy_erp_invoice.pdf');
        form.width(cache_width);
 });
}
 

function getCanvas(){
 form.width((a4[0]*1.33333) -80).css('max-width','none');
 return html2canvas(form,{
     imageTimeout:2000,
     removeContainer:true
    }); 
}
 
}());