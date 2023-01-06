window.onload = function () {
  onClickedlikesBtn();
//  getusername()
};

function getusername() {
  let loginuser = getLoginData().username;
  let title = document.getElementById("title");
  let contentArea = document.getElementById("contentArea");
  let author = document.getElementById("author");
  let timestamp = document.getElementById("timestamp");
  fetch(api + "/api/post")
    .then((res) => res.json())
    .then((data) => {
      for (let datas of data) {
        if ((loginuser = datas.username)) {
          title.innerhtml =
            contentArea.innerhtml =
            author.innerhtml =
            timestamp.innerhtml =
              data;
        }
      }
    });
}

function onClickedlikesBtn() {
  const likedbtn = document.getElementById("likedbtn");
  likedbtn.addEventListener("click", () => {


    let likeOutput = document.getElementById("likeOutput");
 
    likeOutput.value = parseInt(likeOutput.value) + 1;
    likeOutput = parseInt(likeOutput)  ;

    // document.getElementById("likeOutput").value=parseInt(likeOutput)+1
    console.log(likeOutput)

  });
  const dislikedbtn = document.getElementById("dislikedbtn");

  dislikedbtn.addEventListener("click", () => {
    let dislikeOutput = document.getElementById("dislikeOutput");
    console.log()


    dislikeOutput.value = parseInt(dislikeOutput.value) + 1;
    
  });

  // const options={
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //         "Content-Type": 'application/json'

  //     }

  // }
  // fetch(api+"/api/likes",options)
  // .then(res=>res.json())
  // .then(likes=>{

  // })
}
