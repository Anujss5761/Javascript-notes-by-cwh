// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.key()
// sessionStorage.setItem("name")
// sessionStorage.getItem("name")

window.onstorage = (e) => {
    alert("Changed")
    console.log(e)
}