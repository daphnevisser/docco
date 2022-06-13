import { useTypedSelector } from "./useTypedSelector";

export const useCumulativeCode = (cellId: string) => {
  // Bundle the code from all previous code cell so you can use any functions/variables that you have previously defined in the current code cell
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    // Adds the show function to every code cell
    const showFunc = `
      import _React from "react";
      import _ReactDOM from "react-dom"

      var show = (value) => {
        const root = document.querySelector("#root");
        if(typeof value === "object") {
          if(value.$$typeof && value.props) {
            _ReactDOM.render(value, root)
          } else {
            root.innerHTML = JSON.stringify(value);
          }   
        } else {
        root.innerHTML = value;
        }
      }
    `;

    const showFuncNoop = "var show = () => {}";
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.id === cellId) {
          cumulativeCode.push(showFunc);
        } else {
          // Don't show elements from the show function from previous code cells
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join("\n");
};
