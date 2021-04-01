How to run this bot

First step: 
Download this package and open the Scripts.js file

Second Step:
Enter your information on line 80

 var user = {
 
        name: "Jeff Barnum",
        
        email: "jeffbarnum96@yahoo.com",
        
        tel: 2022534845,
        
        address: "1234 Who street",
        
        zip: "28104",
        
        city: "New York",
        
        state: "NY",
        
        ccnum: "4767718398576118",
        
        month: "03",
        
        year: "2027",
        
        cvv: "847",
        
    }

Enter your keywords into the keywords array on line 31 
var keywords = ["pants","shoes","Hanes"] 
These should be concise and lowercase

Enter the categories you would like searched into the categories array on line 32 
var categories = ["Accessories","Pants"] 
These should be the Same Categories supreme uses 
        Accessories
        Pants
        Bags
        Tops/Sweaters
        Skate 
        Shoes 
        Shirts 
        Jackets 
        Hats
        T-Shirts 
        Sweatshirts 
        Shorts 

The Next Steps Handle Uploading the files to Browser:
This is a Chrome Extension so use Google Chrome

Go to 
chrome://extensions/

and activate Developer mode by hitting the switch in the upper right hand corner
Then click Select Unpacked and upload this folder to Chrome

Before running make sure that the blue switch is on in the bottom corner of the extension description

EXTRA WARNINGS
Be sure to close off any developer tabs or inspect elements open as it will cause a pause in the debugger
