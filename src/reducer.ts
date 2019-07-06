export type QueueType = Array<any>;

export type ReducerStateType = {
  isProcessing: boolean;
  queue: QueueType;
};

export type ReducerActionType = {
  type: string;
  payload?: any;
};

export function reducer(state: ReducerStateType, action: ReducerActionType) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        queue: [...state.queue, action.payload],
      };
    case "PROCESSING":
      return {
        ...state,
        isProcessing: true,
      };

    case "PROCESSED":
      return {
        isProcessing: false,
        queue: state.queue.slice(1),
      };
    default:
      return state;
  }
}
