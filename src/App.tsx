import "./App.css";
import clsx from "clsx";
import { Button } from "./components/button";
import { Input } from "./components/input";

function App() {
  return (
    <>
      <section
        className={clsx("w-full h-screen", "flex items-center flex-col")}
      >
        <h1 className={clsx("text-5xl p-5")}>
          <strong>
            React Components with Tailwind Css and Class Variance Authority
          </strong>
        </h1>
        <div className={clsx("w-full h-1/2 p-5", "flex gap-4")}>
          <div className={clsx("w-1/2 h-full border rounded-md p-2", "flex justify-center gap-5")}>
            <Button
              intent={"primary"}
              size={"small"}
              about="Primary Small"
            ></Button>
            <Button
              intent={"secondary"}
              size={"medium"}
              about="Secondary Medium"
            ></Button>
            <Button
              intent={"tertiary"}
              size={"large"}
              about="Tertiary Large"
            ></Button>
            <Button about="Default"></Button>
          </div>
          <div className={clsx("w-1/2 h-full border p-2 rounded-md", "flex justify-center items-start gap-3")}>
            <Input intent={"primary"} placeholder="Primary"></Input>
            <Input intent={"secondary"} placeholder="Secondary"></Input>
            <Input intent={"tertiary"} placeholder="Tertiary"></Input>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
