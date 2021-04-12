import { useState, useEffect } from 'react';
import { Console, Hook, Unhook } from 'console-feed';

export default function ConsoleArea() {
  const [logs, setLogs] = useState([]);

  // run once!
  useEffect(() => {
    Hook(window.console, (log) => setLogs((currLogs) => [...currLogs, log]), false);
    return () => Unhook(window.console);
  }, []);


  return (
    <div className='console-area'>
      <p>The Result is:</p>
      <Console logs={logs} variant='dark' />
    </div>
  );
}
