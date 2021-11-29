function validate()
{
    // Name validation
    var fname=document.getElementById("name").value;
    
    var regxname=/[a-zA-Z]{3,30}/;
    if(fname=="")
    {
        document.getElementById("lblname").style.visibility="visible";
        document.getElementById("lblname").value="Invalid";
        document.getElementById("lblname").style.color="red";
        document.getElementById("name").style.border="red solid 2px";
       
    }
    else if(regxname.test(fname))
    {   
        document.getElementById("lblname").style.visibility="hidden";      
    }
    else
    {
        document.getElementById("lblname").innerHTML='Special Characters are not allowed';
        document.getElementById("lblname").style.visibility="visible";  
        document.getElementById("lblname").style.color="red"; 
        document.getElementById("lbname").style.fontSize="9px";   
        document.getElementById("name").style.border="red solid 2px";
    }

    // Mobile Number Vaildation
    var mobnum=document.getElementById("number").value;

            var regx=/[7-9]\d{9}/;
            if(mobnum=="")
            {
            document.getElementById("lblmob").style.visibility="visible";
            document.getElementById("lblmob").style.color="red";
            document.getElementById("number").style.border="red solid 2px";
            }
            else if(regx.test(mobnum))
            {
                
               document.getElementById("lblmob").style.visibility="hidden";
            }
            else
            {
                document.getElementById("lblmob").innerHTML='Invalid';
                document.getElementById("lblmob").style.visibility="visible";
                document.getElementById("lblmob").style.color="red";
                document.getElementById("number").style.border="red solid 2px";
            }

        //Email validation
        var emailid=document.getElementById("email").value;
        
        var regx2=/^([a-zA-Z0-9/._]+)@([a-zA-z0-9-]+).([a-z]{2,8})?$/;
        
        if(emailid=="")
        {
            document.getElementById("lblemail").style.visibility="visible";
            document.getElementById("lblemail").style.color="red";
            document.getElementById("email").style.border="red solid 2px";
            emailid.style.border="2px solid red";
        }
        else if(regx2.test(emailid))
        {
           document.getElementById("lblemail").style.visibility="hidden";
        }
        else
        {
            document.getElementById("lblemail").innerHTML='Invalid';
            document.getElementById("lblemail").style.visibility="visible";
            document.getElementById("lblemail").style.color="red";
            document.getElementById("email").style.border="red solid 2px";
        }

        var dateofbirth=document.getElementById("dob").value;

        var regdob=/^([1-9]{1,2})-([1-9]{1,2})-([0-9]{3})$/;
        if(dateofbirth="")
        {
            document.getElementById("lbldob").style.visibility="visible";
            document.getElementById("lbldob").style.color="red";
            document.getElementById("dob").style.border="red solid 2px";
        }
        else if(regdob.test(dateofbirth))
        {
            document.getElementById("lbldob").style.visibility="hidden";
        }
        else
        {
            document.getElementById("lbldob").innerHTML='Invalid';
            document.getElementById("lbldob").style.visibility="visible";
            document.getElementById("lbldob").style.color="red";
            document.getElementById("dob").style.border="red solid 2px";
        }

        
        var chkbox=document.getElementById("address");

        if(chkbox.checked==true)
        {
            var street=document.getElementById("streetname").value;
            var cityname=document.getElementById("city").value;
            var zip=document.getElementById("zipcode").value;
            var select=document.getElementById("selector");

            var street1=street;
            var cityyname1=cityname;
            var zip1=zip;
            var select1=select;

            var street1=document.getElementById("streetname1").value=street;
            var cityname=document.getElementById("city").value=cityname;
            var zip=document.getElementById("zipcode").value=zip;
            var select=document.getElementById("selector").value=select;
        }
        else
        {
            var street1=document.getElementById("streetname1").value='';
            var cityname=document.getElementById("city").value;
            var zip=document.getElementById("zipcode").value;
            var select=document.getElementById("selector").value;
        }
        var imgfile=document.getElementById('image').value;
        if(imgfile=="JPEG" || imgfile=="jpg" || imgfile=="png")
        {
            return true;
        }
        else
        {
           //alert("Upload only Image file");
            return false;
        }  
}