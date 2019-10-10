let movies = [
  {
    title: "The Avengers",
    image: "https://bit.ly/2NQOG6H",
    rating: 0
  },
  {
    title: "Our Times",
    image: "https://bit.ly/2OsGmv2",
    rating: 0
  },
  {
    title: "Aquaman",
    image: "https://bit.ly/2zmcLxo",
    rating: 0
  }
];

const dataPanel = document.querySelector("#data-panel");
displayMovieList(movies);

function displayMovieList(data) {
  let htmlContent = `
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    `;

  for (let i = 0; i < data.length; i++) {
    htmlContent += `
        <tr>
          <td>
            <img src = ${data[i].image} width = "70" class="img-thumbnail" >
          </td>
          <td>${data[i].title}</td>
          <td>
            <span class="fa fa-thumbs-up"></span>
            <span class="fa fa-thumbs-down px-2"></span>
            <span>${data[i].rating}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-danger">X</button>
          </td>
        </tr>
      `;
  }

  htmlContent += `
      </tbody>
    </table>
  `;

  dataPanel.innerHTML = htmlContent;
}
/*=====A18======*/

dataPanel.addEventListener("click", function (event) {
  //console.log(event.target.classList.contains('btn-danger'))
  if (event.target.classList.contains("fa-thumbs-up")) {
    let node = event.target.parentElement.lastElementChild;
    node.innerText = 1 + Number(node.innerText);
  } else if (event.target.classList.contains("fa-thumbs-down")) {
    let node = event.target.parentElement.lastElementChild;
    node.innerText = Number(node.innerText) - 1;
  } else if (event.target.classList.contains("btn-danger")) {
    let movName =
      event.target.parentElement.parentElement.children[1].innerText;
    // console.log(movName) 取得電影名稱
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title === movName) {
        //查找電影名稱並刪除陣列元素
        movies.splice(i, 1);
        break;
      }
    }
    event.target.parentElement.parentElement.remove(); //清除該電影，如果不考慮陣列，這一行即達到畫面呈現效果
  }
});
