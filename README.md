# useQueue

The purpose of this utility is to create a small queue using React hooks that processes items in first in first out (FIFO) order.

## Install

```shell
yarn add use-queue
```

or

```shell
npm i use-queue
```

## Usage

```javascript
import useQueue from "use-queue";

function process(item, done) {
  setTimeout(() => {
    console.log("value of current queue item ==>", item);
    done(); // we're finished processing the item and ready to remove it
  }, 1000);
}

function App() {
  const [queue, add] = useQueue(process);

  return (
    <div>
      <code>{JSON.stringify(queue, null, 2)}</code>
      <button onClick={() => add("Item Value Goes Here")}>Add To Queue</button>
    </div>
  );
}
```
