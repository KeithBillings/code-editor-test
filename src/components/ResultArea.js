export default function ResultArea(props) {
  return (
    <>
      <p>The code you wrote:</p>
      <textarea className='result-area' rows='10' defaultValue={'On submit, your code will appear here.'} value={props.textAreaValue} disabled></textarea>
    </>
  );
}
