import { useEffect, useReducer } from "react";
import { reducer, ReducerStateType } from "./reducer";

type ProcessFnType = (item: any, done: () => void) => void;

const useQueue = (process: ProcessFnType) => {
  const initialState: ReducerStateType = {
    isProcessing: false,
    queue: [],
  };
  const [{ isProcessing, queue }, dispatch] = useReducer(reducer, initialState);

  function add(payload: any) {
    dispatch({
      type: "ADD",
      payload,
    });
  }

  useEffect(() => {
    if (typeof process !== "function") return;

    if (queue.length > 0 && !isProcessing) {
      dispatch({
        type: "PROCESSING",
      });
      process(queue[0], () => {
        dispatch({
          type: "PROCESSED",
        });
      });
    }
  }, [queue, isProcessing]);

  return [queue, add];
};

export default useQueue;
