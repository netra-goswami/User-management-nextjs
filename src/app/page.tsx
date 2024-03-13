import Userlist from "@/components/Users/Userlist";
import { apiRequest } from "@/components/generic/api-service";
import { UserInterface } from "@/components/generic/constant";

const getData = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.json();
  if(!response.ok){
    throw new Error("failed to fetch")
  }
  return result
}
export default async function Home() {
  const data = await apiRequest<UserInterface[]>('https://jsonplaceholder.typicode.com/users')

  return (
    <Userlist data={data}/>
  );
}
