const Butt = document.getElementById("google")
const nav = document.getElementById("navigation")
const frame = document.createElement("iframe")

frame.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27983.14897600646!2d24.71963487431641!3d-28.75259289999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b1b92585d0aa1%3A0xf666e4bb92455fb5!2sSol%20Plaatje%20University%20South%20Campus!5e0!3m2!1sen!2sza!4v1757162321518!5m2!1sen!2sza")
frame.setAttribute("width",600)
frame.setAttribute("height",450)
frame.setAttribute("border",0)

frame.setAttribute("loading","lazy")

const parent = document.getElementById("parent")
const child = document.getElementById("child")

function button(){
   parent.removeChild(child)
   parent.appendChild(frame)

   parent.classList.remove("form-container")
   parent.classList.add("map-container")

}



document.addEventListener("scroll",(Event)=>{
   if(window.scrollY >64){
  
    nav.classList.add("scrolled")

   }else{
    nav.classList.remove("scrolled")
   }
})

function contact(){

       parent.removeChild(frame)
       parent.appendChild(child)
          parent.classList.remove("map-container")
   parent.classList.add("form-container")
    
}

