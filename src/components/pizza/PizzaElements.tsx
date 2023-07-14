import { Radio } from "antd"
import { DOUGH, PIZZABASE, PIZZASIZENUMBER } from "../enums.ts"

export default function PizzaElements() {
  return (
    <>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="b">{PIZZASIZENUMBER.Small}</Radio.Button>
        <Radio.Button value="a">{PIZZASIZENUMBER.Default}</Radio.Button>
        <Radio.Button value="c">{PIZZASIZENUMBER.Large}</Radio.Button>
      </Radio.Group>

      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a" className={"large"}>
          {PIZZABASE.CREAMY}
        </Radio.Button>
        <Radio.Button value="b" className={"large"}>
          {PIZZABASE.TOMATO}
        </Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a" className={"large"}>
          {DOUGH.THICK}
        </Radio.Button>
        <Radio.Button value="b" className={"large"}>
          {DOUGH.THIN}
        </Radio.Button>
      </Radio.Group>
    </>
  )
}
