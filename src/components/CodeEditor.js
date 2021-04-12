import Editor from '@monaco-editor/react';

export default function CodeEditor(props) {

  function handleEditorChange(value, event) {
    // here is the current value
    console.log('on change value is: ', value);
    props.setEditorValue(value);
  }

  function handleEditorDidMount(editor, monaco) {
    console.log('onMount: the editor instance:', editor);
    console.log('onMount: the monaco instance:', monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log('beforeMount: the monaco instance:', monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <Editor
      theme='vs-dark'
      height='30vh'
      width='50vw'
      defaultLanguage='javascript'
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}
