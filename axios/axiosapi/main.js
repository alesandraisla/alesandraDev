
const url = "http://localhost:5500/api"

const newUser = {
  student: 'Sasuke Uchiha',
  avatar: 'http://lorempixel.com/400/400/',
  course: 'Contabilidade'
}

const updateDataUser = {
  student: 'Sakura Haruno',
  avatar: 'http://lorempixel.com/400/200/',
  course: 'Medicina'
}

function getUser() {
  axios.get(url)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
      
    })
    .catch(error => console.log(error))
}

async function getUser() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    renderResults.textContent = JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}

getUser()

function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

async function addNewUser() {
  try {
    const response = await axios.post(url, newUser);
    alert(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}


// addNewUser()

function updateUser() {
  axios.put(`${url}/3`,updateDataUser)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

async function updateUser() {
  try {
    const response = await axios.put(`${url}/3`, updateDataUser);
    alert(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}
// updateUser()

function deleteUser() {
  axios.delete(`${url}/3`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}


async function deleteUser() {
  try{
    const response = await axios.delete(`${url}/3`)
    alert(JSON.stringify(response.data))
  }catch(error){
    console.log(error)
  }
}
// deleteUser()

function getOneUser() {
  axios.get(`${url}/4`)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

async function getOneUser() {
  try {
    const response = await axios.get(`${url}/4`);
    const data = response.data;
    renderResults.textContent = JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}

// getOneUser()