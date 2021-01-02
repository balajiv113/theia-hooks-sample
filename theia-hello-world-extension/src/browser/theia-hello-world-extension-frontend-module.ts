import { ContainerModule } from 'inversify';
import { TheiaHelloWorldExtensionWidget } from './theia-hello-world-extension-widget';
import { TheiaHelloWorldExtensionContribution } from './theia-hello-world-extension-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, TheiaHelloWorldExtensionContribution);
    bind(FrontendApplicationContribution).toService(TheiaHelloWorldExtensionContribution);
    bind(TheiaHelloWorldExtensionWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: TheiaHelloWorldExtensionWidget.ID,
        createWidget: () => ctx.container.get<TheiaHelloWorldExtensionWidget>(TheiaHelloWorldExtensionWidget)
    })).inSingletonScope();
});
