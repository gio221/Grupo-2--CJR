import { Professor } from "@/app/components/interfacesPadrao"
import FeedLog from "@/app/components/professorloggedmain"
import axios from "axios"
let prof:Professor;
const Novo2: Professor ={ 
    name: "carlos",
    id: 3,
    departamento: "Exatas",
    foto: "klll",
    date: "hoje" }
const Novo1= ({params}: {params: { userID: string; professorID: string };}) => {
      const getTeacher = async (id:string) =>{
        const professor = await axios.get(`http://localhost:3030/professor/${id}`)
        prof = professor.data
    }
    getTeacher (params.professorID)
return (<>
< FeedLog logged={+params.userID} prof={prof}/> </>)


}
export default Novo1