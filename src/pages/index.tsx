import type { MouseEvent } from 'react';
import styles from './index.less';
import TextWorker from 'worker-loader!./text.worker';

export default function IndexPage() {
  function handleWorkerClick(event: MouseEvent<HTMLButtonElement>) {
    const worker = new TextWorker();

    worker.addEventListener('message', function(event) {
      console.log(event.data);
    });

    worker.postMessage('');
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={ handleWorkerClick }>worker click</button>
    </div>
  );
}
