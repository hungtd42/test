const fetchTest = () => {
  $("#click").on("click", async (e) => {
    e.preventDefault();
    const body = {
      email: $("#username").val(),
      password: $("#password").val()
    }
    console.log(body)
    await axios.post("localhost:3000/api/v1/users/login", body)
    .then(res => {console.log(res)})
    .catch(err => console.log(err))
  })
  
}
fetchTest();