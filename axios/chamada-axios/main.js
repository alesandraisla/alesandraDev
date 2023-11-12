const url = "http://localhost:5500/api";

const newStudent = {
  student:	'Sasuke Uchiha',
  avatar:	'http://lorempixel.com/400/400/',
  course:	'Contabilidade'
}

const updateStudent = {
  student:	'Sakura Haruno',
  avatar:	'http://lorempixel.com/400/400/',
  course:	'Medicina'
}

axios.interceptors.response.use(
  function(response) {
    console.log(
      'Sucesso', 
      response);
  },
  function(error) {
    if(error.response) {
      console.error(
        'Erro na resposta do servidor', 
        error.response.status);
      console.error(
        'Detalhes do erro', 
        error.response.data);
    } 
    return Promise.reject(error);
  }
)

const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);


async function getStudents() {
  try{
    const response = await axios.get(url);
    const data = response.data;
    renderResults.textContent = JSON.stringify(data);
  } catch(error){
    console.log(error);
  }
}

getStudents();

async function addNewStudent() {
  try{
    const response = await axios.post(url, newStudent);
    alert(JSON.stringify(response.data))
  } catch(error) {
    console.log(error);
  }
}

// addNewStudent();

async function updateTheStudent(){
  try{
    const response = await axios.put(`${url}/3`, updateStudent);
    alert(JSON.stringify(response.data))
  }catch(error){
    console.log(error);
  }
}

// updateTheStudent()

async function deleteStudent() {
  try{
    const response = await axios.delete(`${url}/6`)
    alert(JSON.stringify(response.data))
  }catch(error){
    console.log(error)
  }
}
// deleteStudent()

async function getOneStudent() {
  try{
    const response = await axios.get(`${url}/3`)
    const data = response.data;
    renderResults.textContent = JSON.stringify(data)
  }catch(error) {
    console.log(error)
  }
}

// getOneStudent()