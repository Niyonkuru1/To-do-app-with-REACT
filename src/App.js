import TitleHead from './components/TitleHead';
// import InputForm from './components/InputForm';
// import ButtonComp from './components/ButtonComp';
// import DeleteButton from './components/DeleteButton';
// import CompleteButton from './components/CompleteButton';
// import ContentComp from './components/ContentComp';
// import DeleteAndComplete from './components/DeleteAndComplete';
// import CombinedInputs from './components/CombinedInputs';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="container">
      <TitleHead>
      </TitleHead>
    <Form></Form>
    <Card></Card>

      {/* <InputForm></InputForm>
      <CombinedInputs></CombinedInputs>
      <ButtonComp>
      </ButtonComp>
      <DeleteButton>
      </DeleteButton>
      <CompleteButton>
      </CompleteButton>
      <ContentComp></ContentComp>
      <DeleteAndComplete></DeleteAndComplete> */}
    </div>
  );
}

export default App;
