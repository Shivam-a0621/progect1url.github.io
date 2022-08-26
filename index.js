

let inputbtn = document.getElementById("button_save")
let inputel = document.getElementById("input_el")
let myleads = []
const output_El = document.getElementById("ul_el")
const deletbtn=document.getElementById("delete_btn")

let tabbtn=document.getElementById("tb_btn")
tabbtn.addEventListener("click",function()
{
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
  })
})

const leadsfromlocal = JSON.parse(localStorage.getItem("myleads"))


if(leadsfromlocal){
  myleads=leadsfromlocal
  render(myleads)
}


deletbtn.addEventListener("dblclick",function() {
  localStorage.clear()
  myleads=[]
  render(myleads)
})

inputbtn.addEventListener("click", function () {

  myleads.push(inputel.value)

  inputel.value = ""

  localStorage.setItem("myleads",JSON.stringify(myleads))

  render(myleads)
})


function render(leads) {
  let listitems = ""

  for (let i = 0; i < leads.length; i++) {
    
    listitems += `<li> 
    <a target='_blank' href='${leads[i]}' >
     ${leads[i]}
    </a>
    </li>`

    

  }


  output_El.innerHTML = listitems

}