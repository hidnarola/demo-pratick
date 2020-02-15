
import * as React from "react";

export interface INameListProps {
  nameList: string[];
  selectedId: any;
  pickName: any;
  removeName: any;
}

export class NameList extends React.Component<INameListProps, {}>
{
  public pickRandomName = (selectedId: number): any => {
    var index = Math.floor(Math.random() * this.props.nameList.length);
    return index !== selectedId ? index : this.pickRandomName(selectedId);
  }
  public render(): JSX.Element {
    const { selectedId, nameList, pickName, removeName } = this.props
    const selectedName = nameList[selectedId];
    return <div>
      <br />
      <button onClick={() => pickName(this.pickRandomName(selectedId))} >Pick a random name</button>
      <h4>{selectedName ? `Selected name is ${selectedName}` : nameList.length ? `Please pick any name from the list` : ""}</h4>
      <ul>
        {
          nameList.length ? nameList.map((row: string, index: number) =>
            <div key={index} style={{ display: "flex", padding: "5px 0", justifyContent: "space-between", width: "250px" }}>
              <li style={{ color: selectedId == index ? `red` : `#000`, fontWeight: selectedId == index ? `bold` : `inherit` }} >{row}
              </li>
              <button style={{ background: "red", color: "white" }} onClick={() => removeName(index)}> X </button>
            </div>
          ) : "Empty List"
        }
      </ul>
    </div>;
  }
}