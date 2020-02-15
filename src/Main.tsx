import * as React from 'react';
import { App } from './App';
import { NameList } from './components/NameList';
import { AddNameForm } from './components/AddNameForm';

export interface IMainProps {
    app: App;
}

interface MainState {
    names: any;
    selectedId: number;
}

export class Main extends React.Component<IMainProps, MainState>
{
    constructor(props: IMainProps) {
        super(props);
        this.state = {
            names: ["Amit"],
            selectedId: null
        }
    }

    //Pick Name from list
    public pickName = (id: number) => {
        this.setState({ selectedId: id })
    }

    //Add Name in list
    public addName = (name: string) => {
        var { names } = this.state;
        names.push(name);
        this.setState({ names });
    }

    //Remove Name in list
    public removeName = (index: number) => {
        if (confirm('are you sure you want to remove this?')) {
            var { names } = this.state;
            names.splice(index, 1);
            this.setState({ names });
        }
    }

    public render(): JSX.Element {
        const { names, selectedId } = this.state
        return (
            <>
                <AddNameForm addName={this.addName} />
                <NameList nameList={names} pickName={this.pickName} removeName={this.removeName} selectedId={selectedId} />
            </>
        );
    }
}