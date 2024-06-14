import axios from "axios";
import FeedLogged from "../../components/feedLogMain";
import { Professor } from "../../components/interfacesPadrao";


let professores: Professor[] = [];

const getTeachers = async () => {
  const profs = await axios.get('http://localhost:3030/professor');
  professores = profs.data;
};

const FeedLog = async ({ params }: { params: { userID: number } }) => {
  await getTeachers();

  return (
    <>
      <FeedLogged logged={params.userID} profesores={professores} />
    </>
  );
};

export default FeedLog;