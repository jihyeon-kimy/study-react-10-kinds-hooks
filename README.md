# study-react-10-kinds-hooks

노마드 코더 실전형 리액트 Hooks 10가지를 보고 기록하는 레포지토리 입니다.

## 1. useInput : Input의 유효성을 검증하는 커스텀 훅

```jsx
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
```

<br/>

## 2. useTabs : 탭을 클릭하면, 해당 내용을 출력해주는 커스텀 훅

```jsx
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
```

<br/>

## 3. useTitle : 페이지 title을 수정하는 커스텀 훅

```jsx
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
```

<br/>

## 4. useClick : 요소를 클릭할 경우 반응하는 커스텀 훅

```jsx
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef(); // useReft는 document.querySelector()과 동일

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};
```

<br/>

## 5. useConfirm & usePreventLeave

### 5-1. useConfirm : 사용자가 무언가를 하기 전에 확인 메시지를 보여주는 함수

```jsx
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confrimAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confrimAction;
};
```

### 5-2. usePreventLeave : 윈도우 창을 닫기 전에 확인 메시지를 보여주는 함수

```jsx
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
```

<br/>

## 6. useBeforeLeave : 마우스가 창을 벗어날때 메시지를 보여주는 커스텀 훅

```jsx
const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
```

<br/>

## 7. useFadeIn & useNetwork

### 7-1. useFadeIn : 요소가 서서히 보여지게 하는 커스텀 훅 (css로도 가능)

```jsx
const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
```

### 7-2. useNetwork : navigator가 online혹은 offline시 작동하는 커스텀 훅

```jsx
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //navigator.onLine 웹사이트가 online, offline인지 여부를 T/F로 알려준다.

  const handleChange = () => {
    if (typeof onChange == "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
```

<br/>

## 8. useScroll & useFullscreen

### 8-1. useScroll : 유저가 무언가를 스크롤해 지나쳤을 때 작동하는 커스텀 훅

```jsx
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
```

### 8-2. useFullscreen : 요소를 전체화면 사이즈로 만들어주는 커스텀 훅

```jsx
const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
```

<br/>

## 9. useNotificatioin : window 알림을 실행시키는 함수

```jsx
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
```

<br/>

## 10. useAxios : axios HTTP 상태관리 및 refetch를 하는 커스텀 훅

```jsx
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);

  return { ...state, refetch };
};
```
