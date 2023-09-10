
import './App.css';
// import Button from './Components/Button.tsx';
import FormValidation from './Components/FormValidation.tsx';
import { fetchPosts } from './app/actions/postActions.tsx';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks.tsx';
import { RootState } from './app/store.tsx';
import HomePage from "./Components/HomePage/HomePage.tsx";
import FormData from "./Components/FormData/FormData.tsx";
import GenericExample from "./Components/GenericExample.tsx";
import Form from "./Components/Form.tsx";
// import MyGenericComponent from "./Components/MyGenericComponent/MyGenericComponent.tsx";


function App() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  // function handleClick() {
  //   alert("Button clicked");
  // }
  return (
    <>
      {/* <h1>hello</h1>
      <Button title="hello" onClick={handleClick} className="primary" >
        "hello"
      </Button> */}

{/* <MyGenericComponent<string> data="Hello, TypeScript Generics!" />
<MyGenericComponent<number> data={23} /> */}


 {/* TypeScript on hooks on form  */}
 <Form/>


    <GenericExample/>






      <FormValidation />




      {loading === 'pending' && <p>Loading...</p>}


      {error && <p>Error: {error}</p>}


      {data && (
        <ul>
          {data.map((post: { title: string; id: number }) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      <HomePage/>

      <FormData />



    </>
  );
}

export default App;
