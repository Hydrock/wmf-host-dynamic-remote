import React, { Suspense } from "react";
import { useDynamicScript } from '../hooks/use-dynamic-script';

function loadComponent(scope, module) {
    return async () => {
        // Эта строчка инициализирует область общего доступа. 
        await __webpack_init_sharing__("default");
        const container = window[scope]; // or get the container somewhere else
        // Инициализируем контейнер, он может предоставлять общие модули
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    };
}

export function ModuleLoader(props) {
    const { url, scope, module, ...rest } = props;

    const { ready, failed } = useDynamicScript(url);

    if (!module) {
        return <h2>Не указана система</h2>;
    }

    if (!ready) {
        return <h2>Загрузка динамического скрипта: {url}</h2>;
    }

    if (failed) {
        return <h2>Не удалось загрузить динамический скрипт: {url}</h2>;
    }

    const Component = React.lazy(
        loadComponent(scope, module)
    );

    return (
        <Suspense fallback="Loading Module">
            <Component {...rest} />
        </Suspense>
    );
};
