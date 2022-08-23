// @note  简易实现reactHook useState

let workInProgressHook = null;
let isMounted = false;

const fiber = {
  stateNode: App,
  memoizedState: null,
};

function useState(initialState) {
  let hook;
  if (!isMounted) {
    hook = {
      memoizedState: initialState,
      next: null,
      queue: {
        pending: null,
      },
    };
    // 创建一个单向链表结构
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  // 基础值
  let baseState = hook.memoizedState;
  // 如果有值 说明有需要更新的操作
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);
    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  };
  // 环装链表结构
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

function schedule() {
  workInProgressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  isMounted = true;
  return app;
}

function App() {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(10);
  console.log("isMounted", isMounted);
  console.log("state", state);
  console.log("state1", state1);

  return {
    onclick: () => {
      setState((state) => state + 1);
    },
    onclick1: () => {
      setState1((state1) => state1 + 10);
    },
  };
}

const app = schedule();
// window.app = schedule();
app.onclick();
// app.onclick1();
