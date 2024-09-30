import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "../../components/todoList";

export default function Home() {
  return (
    <div className={styles.page}>
      <TodoList />
    </div>
  );
}
