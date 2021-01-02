import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { HellowWorldComponent } from './theia-hello-world-component';

@injectable()
export class TheiaHelloWorldExtensionWidget extends ReactWidget {

    static readonly ID = 'theia-hello-world-extension:widget';
    static readonly LABEL = 'TheiaHelloWorldExtension Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = TheiaHelloWorldExtensionWidget.ID;
        this.title.label = TheiaHelloWorldExtensionWidget.LABEL;
        this.title.caption = TheiaHelloWorldExtensionWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    protected render(): React.ReactNode {
        return <HellowWorldComponent />
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: TheiaHelloWorldExtension Widget Successfully Created!');
    }

}
