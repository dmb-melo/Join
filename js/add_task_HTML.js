function generateContactsAddTask(name, firstname, surname, i) {
    return /*html*/ `
    <div class="circleAvatar" id="circle-${i}" style="background-color: ${colors[i]}">
      <p class="nameIdList" id="name-id">${firstname}${surname}</p>
    </div>                
    <div class="custom-checkbox">            
      <input class="inputCheckBox" type="checkbox" id="myCheckbox_${i}">                    
      <label class="nameContact" for="myCheckbox_${i}">${name}</label>                              
    </div>`;}

function generateAvatarAddTask(selectedIndex, contact, firstname, surname) {
    return /*html*/`
        <div>
            <div class="circleAvatar" id="circle-${selectedIndex}" style="background-color: ${colors[selectedIndex]}">
                <p class="nameIdList" id="name-id">${firstname}${surname}</p>
            </div>
        </div>
    `;
}


  