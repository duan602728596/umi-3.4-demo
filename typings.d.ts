declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare module 'worker-loader!*' {
  class WorkerLoader extends Worker {
    // @ts-ignore
    constructor(): Worker;
  }

  export default WorkerLoader;
}
