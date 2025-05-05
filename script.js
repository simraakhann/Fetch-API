


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.img-clickable').forEach(img => {
    img.addEventListener('click', function () {
      const largeUrl = this.getAttribute('data-img-url');
      document.getElementById('modalImage').src = largeUrl;
    });
  });
});




  let apiUrl = "https://simraakhann.github.io/Images-of-API/data.json"

  async function getApi(link){

    let response = await fetch(link)
    let data = await response.json()
    console.log(data);
    

    let img = ""

    data.forEach(element => {

      img += `
      
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src= ${element.img_url}
               class="card-img-top img-clickable"
               alt="Card Image"
               data-bs-toggle="modal"
               data-bs-target="#imageModal"
               data-img-url= ${element.img_ur} >
          <div class="card-body">
            <h5 class="card-title">${element.img_id} </h5>
            <h6 class="card-subtitle mb-2">${element.img_category}</h6>
            <p class="card-text">${element.img_description}</p>
          </div>
        </div>
      </div>
      
      
      `
      document.getElementById("all-data").innerHTML = img

    });
  




  }

  getApi(apiUrl)