 
const urlSpain="http://universities.hipolabs.com/search?name=madrid&country=spain";
const urlUK="http://universities.hipolabs.com/search?name=london&country=united%20kingdom";
const urlPor="http://universities.hipolabs.com/search?name=lisboa&country=portugal"; 

 

function spain(){
    document.getElementById("espania").style.backgroundColor="rgb(12, 209, 5)";
    document.getElementById("uk").style.backgroundColor="";
    document.getElementById("portugal").style.backgroundColor="";
    
    document.getElementById("result").innerHTML=''; 
    document.getElementById("buscador").value='';
    let lookFor=document.getElementById("buscador");

    fetch(urlSpain)
    .then(response=>response.json())
    .then(data=>mostrarData(data))
    .catch(error=>console.log(console.log(error)));

    const mostrarData=(data)=>{
        console.log(data);
        lookFor.addEventListener("keyup",function(){
            document.getElementById("result").innerHTML=''; 
            let myUniversity=document.getElementById("buscador").value;
            for (let i=0; i<=data.length;i++){
                node=data[i].name;
                let elements=node.split(" ");
                for(let element of elements){
                    if(element.startsWith(myUniversity)){
                        let parraf=document.createElement('p');
                        document.getElementById("result").appendChild(parraf).appendChild(document.createTextNode(node));   
                    }       
                }
                        
            }             
        });     
    }    
}
function uk(){
    document.getElementById("espania").style.backgroundColor="";
    document.getElementById("uk").style.backgroundColor="rgb(12, 209, 5)";
    document.getElementById("portugal").style.backgroundColor="";
    
    document.getElementById("result").innerHTML='';
    document.getElementById("buscador").value='';
    let lookFor=document.getElementById("buscador");
    fetch(urlUK)
    .then(response=>response.json())
    .then(data=>mostrarData(data))
    .catch(error=>console.log(console.log(error)));
    
    const mostrarData=(data)=>{
        console.log(data);
        lookFor.addEventListener("keyup",function(){
            document.getElementById("result").innerHTML=''; 
            let myUniversity=document.getElementById("buscador").value;
            for (let i=0; i<=data.length;i++){
                node=data[i].name;
                if(node.startsWith(myUniversity)){
                    let parraf=document.createElement('p');
                    document.getElementById("result").appendChild(parraf).appendChild(document.createTextNode(node));   
                }               
            }             
        });   
    }
}
function portugal(){
    document.getElementById("espania").style.backgroundColor="";
    document.getElementById("uk").style.backgroundColor="";
    document.getElementById("portugal").style.backgroundColor="rgb(12, 209, 5)";

    document.getElementById("result").innerHTML='';
    document.getElementById("buscador").value='';
    let lookFor=document.getElementById("buscador");
    fetch(urlPor)
    .then(response=>response.json())
    .then(data=>mostrarData(data))
    .catch(error=>console.log(console.log(error)));
    
    const mostrarData=(data)=>{
        console.log(data);        
        lookFor.addEventListener("keyup",function(){
            document.getElementById("result").innerHTML=''; 
            let myUniversity=document.getElementById("buscador").value;
            for (let i=0; i<=data.length;i++){
                node=data[i].name;
                if(node.startsWith(myUniversity)){
                    let parraf=document.createElement('p');
                    document.getElementById("result").appendChild(parraf).appendChild(document.createTextNode(node));   
                }               
            }             
        });   
    }
}