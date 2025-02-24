```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Component rendered:', count);
  }, [count]); // This is crucial: only re-run when 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This line is a potential source of bugs
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```