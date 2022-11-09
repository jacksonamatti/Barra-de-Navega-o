const AbrirSideBar = () => {
  const navBar = document.querySelector(".sideBarAbrir");
  const faSolid = document.querySelector(".fa-solid");

  faSolid.classList.toggle("fa-x");
  navBar.classList.toggle("sideBarFechar");
};
const button = document.getElementById("button");
button.addEventListener("click", AbrirSideBar);
