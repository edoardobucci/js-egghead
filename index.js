// Import stylesheets
import './style.css';

// Write Javascript code!

var deliveryBoy = {
   name : "Jhon", handleMessage : function (message,handler){
     handler(message);
   },
   recive : function(){
             this.handleMessage("Hello ", message => console.log(message + this.name) )
   } 

}
deliveryBoy.recive();