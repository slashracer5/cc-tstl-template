import { command } from "cc.completion";
import * as event from "./event";

// Put your code here
// os.setComputerLabel("mining_boy");
// print("turtle refueling...");
// while (!turtle.refuel()) {
//   turtle.select(
//     turtle.getSelectedSlot() != 16 ? turtle.getSelectedSlot() + 1 : 1
//   );
//   sleep(0.2);
// }
// print("fuel level: " + turtle.getFuelLevel());
// print("turtle ready...");

function debugTablePrint(table: LuaTable | object) {
  print(
    Object.keys(table)
      .map((x) => x + ": " + table[x])
      .join(", ")
  );
}
debugTablePrint(turtle.getItemDetail());
debugTablePrint(turtle.getItemDetail(1));

let temp = <MonitorPeripheral>peripheral.wrap("left");
temp.getBackgroundColor();
temp.write("test");
