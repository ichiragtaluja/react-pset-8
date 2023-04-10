import { useParams } from "react-router-dom";
import { fakeFetch } from "../data/fakeFetch";

export function About() {
  const { productId } = useParams();
  
  return (
    <>
      <h1>This is About Page</h1>
      <p>ID: {productId}</p>
    </>
  );
}
