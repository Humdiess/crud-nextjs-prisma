import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "../../components/todoList";
import CreateCar from "../../components/CreateCar";
import CarList from "../../components/CarList"

export default function Home() {
  return (
    <div className={styles.page}>
      <CreateCar />
      <CarList />
    </div>
  );
}
