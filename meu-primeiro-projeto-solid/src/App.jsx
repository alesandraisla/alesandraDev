import styles from './App.module.css';
import { Accordion } from './components/Accordion';

function App() {
  const items = [
    {title: "Item 1", content: "Content for item 1"},
    {title: "Item 2", content: "Content for item 2"},
    {title: "Item 3", content: "Content for item 3"},
    {title: "Item 4", content: "Content for item 4"},
    {title: "Item 5", content: "Content for item 5"},
  ]

  return (
    <div class={styles.App}>
      <h2 class={styles.Title}>Criando Accordion com SolidJs</h2>
      <Accordion items={(items)} />
    </div>
  );
}

export default App;
