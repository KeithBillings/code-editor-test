import {useState} from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';
import ResultArea from './components/ResultArea';
import ConsoleArea from './components/ConsoleArea';

function App() {
  const [editorValue, setEditorValue] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState(editorValue);

  async function handleClick(){
    await setTextAreaValue(editorValue);
    console.log('editor value is: ',editorValue);
    console.log('text area value is: ', textAreaValue);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2 className='title'>BrandLive Text Editor Test</h2>
        <CodeEditor setEditorValue={setEditorValue} />
        <div class='btn' onClick={handleClick}>Submit</div>
        <ResultArea textAreaValue={textAreaValue} />
        {/* <ConsoleArea /> */}
      </header>
    </div>
  );
}

export default App;
